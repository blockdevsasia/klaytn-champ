require('dotenv').config()
var stream = require('stream')

const klaytnEnv = require('./environments.js').klaytn[process.env.KLAYTN_ENVIRONMENT.toLowerCase()]
const champEnv = require('./environments.js').champ[process.env.CHAMP_ENVIRONMENT.toLowerCase()]
var Jimp = require('jimp')
const ChampContract = require('./KlaytnChamp.json')
const CountContract = require('./Count.json')

const express = require('express')
const cors = require('cors')
const Caver = require('caver-js')
const wrap = require('./middleware/wrap')
const helpers = require('./helpers.js')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const caver = new Caver(klaytnEnv.api_url)
const testnetCaver = new Caver(require('./environments.js').klaytn.testnet.api_url)
const champContract = new caver.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

const { retrieveFirebaseId } = require('./firebaseHelpers.js')

const sender = caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const payer = caver.klay.accounts.wallet.add(process.env.FEEPAYER_PRIKEY, process.env.FEEPAYER_ADDRESS)

let tokenOwners = {} // Simple key-value store that caches tokenowners in memory while the server runs.

async function executeMethod (method, options) {
  if (process.env.KLAYTN_ENVIRONMENT === 'MAINNET') {
    // If we're executing on mainnet, use fee delegate process
    const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
      data: method.encodeABI(),
      type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
      to: ChampContract.networks[klaytnEnv.network_id].address,
      gas: '30000000',
      from: sender.address
    }, sender.privateKey)

    const receipt = await caver.klay.sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: payer.address
    })

    return receipt
  } else {
    return method.send(options)
  }
}

app.get('/token/:tokenId', wrap(async (req, res, next) => {
  const tokenId = req.params.tokenId
  if (tokenId.length > 100 && !Number.isInteger(tokenId)) return res.status(422).send('Invalid TokenId')

  // Define type of token
  const bn = caver.utils.toBN(tokenId, 10)
  const certlevel = bn.shrn(192)

  let metadata = {
    'description': 'Klaytn Champ Achievement Badge: ' + certlevel === 0 ? 'Initiate' : 'Associate',
    'name': certlevel === 0 ? 'Klaytn Initiate' : 'Klaytn Developer Associate',
    'external_url': 'https://klaytn.champ.blockdevs.asia/token/' + tokenId,
    'image': 'https://klaytn.champ.blockdevs.asia/token_img/' + tokenId
  }

  return res.status(200).send(metadata)
}))

app.get('/token_img/:tokenId', wrap(async (req, res, next) => {
  const tokenId = req.params.tokenId
  if (tokenId.length > 100 && !Number.isInteger(tokenId)) return res.status(422).send('Invalid TokenId')

  // Define type of token
  const bn = caver.utils.toBN(tokenId, 10)
  const certlevel = bn.shrn(192)

  const imageFile = certlevel.toNumber() === 0 ? 'badge-initiate-klaytn-champ.png' : 'badge-associate-klaytn-champ.png'
  const badgeText = certlevel.toNumber() === 0 ? 'Klaytn Initiate' : 'Klaytn Developer Associate'

  let metadata = {
    'description': 'Klaytn Champ Achievement Badge: ' + certlevel === 0 ? 'Initiate' : 'Associate',
    'name': badgeText,
    'external_url': 'https://klaytn.champ.blockdevs.asia/token/' + tokenId,
    'image': 'https://klaytn.champ.blockdevs.asia/token_img/' + tokenId
  }

  let tokenOwner
  if (tokenOwners.hasOwnProperty(tokenId)) {
    tokenOwner = tokenOwners[tokenId]
  } else {
    tokenOwner = await champContract.methods.ownerOf(tokenId).call()
    tokenOwners[tokenId] = tokenOwner
  }

  const fileName = process.cwd() + '/' + imageFile

  let loadedImage = await Jimp.read(fileName)
  try {
    let font16 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK)
    loadedImage.print(font16, 50, 310, tokenOwner)
  } catch (err) { console.error(err) }

  var fileContents = await loadedImage.getBufferAsync(Jimp.MIME_PNG)

  var readStream = new stream.PassThrough()
  readStream.end(fileContents)
  res.set('Content-Type', 'image/png')

  readStream.pipe(res)
}))

app.post('/api/resetUser', wrap(async (req, res, next) => {
  const address = req.body.address
  const firebaseUser = await retrieveFirebaseId(req.body.idToken)
  const uid = firebaseUser.uid
  // is uid the admin's uid?
  if (uid !== process.env.ADMIN_UID) {
    return res.status(422).send('Access denied')
  }

  const result = await executeMethod(champContract.methods.resetUser(address))
  return res.status(200).send(result)
}))

app.post('/api/registerUser', wrap(async (req, res, next) => {
  const address = req.body.address
  const firebaseUser = await retrieveFirebaseId(req.body.idToken)
  const uid = firebaseUser.uid
  const hashedUid = caver.utils.keccak256(uid)
  const hashedGoogle = caver.utils.keccak256(firebaseUser.email)
  const randomNumber = Math.floor(1 + (Math.random() * 1000000))

  try {
    const result = await executeMethod(champContract.methods.registerUser(address, hashedUid, hashedGoogle, randomNumber))

    console.debug(result)
    return res.status(200).send('OK')
  } catch (err) {
    return res.status(422).send(err)
  }
}))

app.post('/api/checkLevel2', wrap(async (req, res, next) => {
  const address = req.body.address

  const txHash = req.body.txHash

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.type === 'TxTypeValueTransfer' &&
      tx.from.toUpperCase() === klaytnEnv.faucet_address.toUpperCase() &&
      tx.txHash === txHash,
    null // We don't need the txn detail now
  )

  if (result !== undefined || result.length > 0) {
    try {
      const result = await executeMethod(champContract.methods.updateUserLevel(address, 2))
      console.debug(result)
      return res.status(200).send('OK')
    } catch (err) {
      console.error(err)
      res.status(422).send(err)
    }
  } else {
    return res.status(406).send('WRONG')
  }
}))

app.post('/api/checkLevel3', wrap(async (req, res, next) => {
  const address = req.body.address
  const contractAddress = req.body.contract

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.contractAddress.toUpperCase() === contractAddress.toUpperCase(),
    null // We don't need the txn detail now
  )

  if (result.length > 0) {
    const result = await executeMethod(champContract.methods.updateUserLevel(address, 3))
    console.debug(result)
    return res.status(200).send('OK')
  } else {
    return res.status(406).send('WRONG')
  }
}))

app.post('/api/checkLevel4', wrap(async (req, res, next) => {
  const address = req.body.address
  const txHash = req.body.txHash
  let randomHex = caver.utils.numberToHex(req.body.random)
  randomHex = '000' + randomHex.substr(2, randomHex.length)

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.txHash === txHash,
    async tx =>
      tx.input.indexOf(randomHex) > -1
  )

  if (result.length > 0) {
    const result = await executeMethod(champContract.methods.updateUserLevel(address, 4))
    console.debug(result)
    return res.status(200).send('OK')
  } else {
    return res.status(406).send('WRONG')
  }
}))

app.post('/api/checkLevel5', wrap(async (req, res, next) => {
  let contractAddress
  const address = req.body.address
  // const count = req.body.count
  const random = req.body.random

  let randomHex = caver.utils.numberToHex(req.body.random)
  randomHex = '000' + randomHex.substr(2, randomHex.length)

  const txsContractCalls = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.type === 'TxTypeLegacyTransaction' && tx.contractAddress === '' && tx.gasUsed < 90000,
    async tx =>
      tx.input.indexOf(randomHex) > -1
  )

  if (txsContractCalls.length > 0) {
    contractAddress = txsContractCalls[0].to
    const blockNr = txsContractCalls[0].blockNumber
    const expectedCount = blockNr * random
    const countContract = new testnetCaver.klay.Contract(CountContract.abi, contractAddress)

    // Find contract call
    const count = await countContract.methods.count().call()

    if (Number.parseInt(count) === Number.parseInt(expectedCount)) {
      await executeMethod(champContract.methods.updateUserLevel(address, 5))

      const updateCertLevelResult = await executeMethod(champContract.methods.updateUserCertificationLevel(address, 1))

      return res.status(200).send('OK')
    } else {
      return res.status(406).send('WRONG')
    }
  }

  res.status(406).send('WRONG')
}))

app.listen(champEnv.api_port, () => console.log(`Example app listening on port ${champEnv.api_port}!`))
