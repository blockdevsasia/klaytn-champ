require('dotenv').config()
const klaytnEnv = require('./environments.js').klaytn[process.env.KLAYTN_ENVIRONMENT.toLowerCase()]
const champEnv = require('./environments.js').champ[process.env.CHAMP_ENVIRONMENT.toLowerCase()]

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
caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const champContract = new caver.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

const { retrieveFirebaseId } = require('./firebaseHelpers.js')

app.post('/resetUser', wrap(async (req, res, next) => {
  const address = req.body.address
  const firebaseUser = await retrieveFirebaseId(req.body.idToken)
  const uid = firebaseUser.uid
  // is uid the admin's uid?
  if (uid !== process.env.ADMIN_UID) {
    return res.status(422).send('Access denied')
  }

  const result = await champContract.methods.resetUser(address).send({
    gas: '200000',
    from: process.env.ADMIN_PUBKEY
  })
  return res.status(200).send(result)
}))

app.post('/registerUser', wrap(async (req, res, next) => {
  const address = req.body.address
  const firebaseUser = await retrieveFirebaseId(req.body.idToken)
  const uid = firebaseUser.uid
  const hashedUid = caver.utils.keccak256(uid)
  const randomNumber = Math.floor(1 + (Math.random() * 1000000))

  try {
    const result = await champContract.methods.registerUser(address, hashedUid).send({
      gas: '200000',
      from: process.env.ADMIN_PUBKEY,
      value: randomNumber
    })
    console.debug(result)
    return res.status(200).send()
  } catch (err) {
    return res.status(422).send(err)
  }
}))

app.post('/checkLevel2', wrap(async (req, res, next) => {
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
      const result = await champContract.methods.updateUserLevel(address, 2).send({
        gas: '200000',
        from: process.env.ADMIN_PUBKEY
      })
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

app.post('/checkLevel3', wrap(async (req, res, next) => {
  const address = req.body.address
  const contractAddress = req.body.contract

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.contractAddress.toUpperCase() === contractAddress.toUpperCase(),
    null // We don't need the txn detail now
  )

  if (result.length > 0) {
    const result = await champContract.methods.updateUserLevel(address, 3).send({
      gas: '200000',
      from: process.env.ADMIN_PUBKEY
    })
    console.debug(result)
    return res.status(200).send('OK')
  } else {
    return res.status(406).send('WRONG')
  }
}))

app.post('/checkLevel4', wrap(async (req, res, next) => {
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
    const result = await champContract.methods.updateUserLevel(address, 4).send({
      gas: '200000',
      from: process.env.ADMIN_PUBKEY
    })
    console.debug(result)
    return res.status(200).send('OK')
  } else {
    return res.status(406).send('WRONG')
  }
}))

app.post('/checkLevel5', wrap(async (req, res, next) => {
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
    const countContract = new caver.klay.Contract(CountContract.abi, contractAddress)

    // Find contract call
    const count = await countContract.methods.count().call()
    console.log('count', Number.parseInt(count), Number.parseInt(expectedCount))
    if (Number.parseInt(count) === Number.parseInt(expectedCount)) {
      const result = await champContract.methods.updateUserLevel(address, 5).send({
        gas: '200000',
        from: process.env.ADMIN_PUBKEY
      })
      console.debug(result)
      return res.status(200).send('OK')
    } else {
      return res.status(406).send('WRONG')
    }
  }

  res.status(406).send('WRONG')
}))

app.listen(champEnv.api_port, () => console.log(`Example app listening on port ${champEnv.api_port}!`))
