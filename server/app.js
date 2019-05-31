const ChampContract = require('./KlaytnChamp.json')
const CountContract = require('./Count.json')
const rp = require('request-promise-native');
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Caver = require('caver-js')
const wrap = require("./middleware/wrap")
const helpers = require('./helpers.js')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const caver = new Caver(process.env.URL)
caver.klay.accounts.wallet.add(process.env.PRIVATE_KEY);
const champContract = new caver.klay.Contract(ChampContract.abi, process.env.CONTRACT_ID)

app.post('/' + process.env.SECRET_RESET_URL, wrap(async (req, res, next) => {
  const address = req.body.address

  console.log(address)
  const result = await champContract.methods.resetUser(address).send({
    gas: '200000',
    from: process.env.ADDRESS,
  })
  res.status(200).send(result)
}))

app.post('/registerUser', wrap(async (req, res, next) => {
  const address = req.body.address
  const googleHash = req.body.googleHash

  const randomNumber = Math.floor(1 + (Math.random() * 1000000))

  try {
    const result = await champContract.methods.registerUser(address, caver.utils.hexToBytes(googleHash)).send({
      gas: '200000',
      from: process.env.ADDRESS,
      value: randomNumber
    })
    res.status(200).send()
  }catch(err){
    res.status(422).send(err)
  }
}))


app.post('/checkLevel2', wrap(async (req, res, next) => {
  const address = req.body.address

  // const balance = await caver.klay.getBalance(address)
  const txHash = req.body.txHash

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.type === 'TxTypeValueTransfer'
      && tx.from.toUpperCase() === process.env.FAUCET_ADDRESS.toUpperCase()
      && tx.txHash === txHash,
    null    // We don't need the txn detail now
  )

  if(result.length > 0){
    const result = await champContract.methods.updateUserLevel(address,2).send({
      gas: '200000',
      from: process.env.ADDRESS,
    })
    res.status(200).send("OK")
  }else{
    res.status(406).send("WRONG")
  }

}))

app.post('/checkLevel3', wrap(async (req, res, next) => {
  const address = req.body.address
  const contractAddress = req.body.contract

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.contractAddress.toUpperCase() === contractAddress.toUpperCase(),
    null    // We don't need the txn detail now
  )

  if(result.length > 0){
    const result = await champContract.methods.updateUserLevel(address,3).send({
      gas: '200000',
      from: process.env.ADDRESS,
    })
    res.status(200).send("OK")
  }else{
    res.status(406).send("WRONG")
  }
}))

app.post('/checkLevel4', wrap(async (req, res, next) => {
  const address = req.body.address
  const txHash = req.body.txHash
  let randomHex = caver.utils.numberToHex(req.body.random)
  randomHex = '000' + randomHex.substr(2,randomHex.length)

  const result = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.txHash === txHash,
    async tx =>
      tx.input.indexOf(randomHex) > -1
  )

  if(result.length > 0){
    const result = await champContract.methods.updateUserLevel(address,4).send({
      gas: '200000',
      from: process.env.ADDRESS,
    })
    res.status(200).send("OK")
  }else{
    res.status(406).send("WRONG")
  }
}))

app.post('/checkLevel5', wrap(async (req, res, next) => {
  let contractAddress
  const address = req.body.address
  const count = req.body.count
  const random = req.body.random

  let randomHex = caver.utils.numberToHex(req.body.random)
  randomHex = '000' + randomHex.substr(2,randomHex.length)

  const txsContractCalls = await helpers.findTransactionsBy(
    address,
    async tx =>
      tx.type === "TxTypeLegacyTransaction" && tx.contractAddress === "" && tx.gasUsed < 90000,
    async tx =>
      tx.input.indexOf(randomHex) > -1
  )

  if(txsContractCalls.length > 0){
    contractAddress= txsContractCalls[0].to
    const blockNr = txsContractCalls[0].blockNumber
    const expectedCount = blockNr * random
    const countContract = new caver.klay.Contract(CountContract.abi, contractAddress)

    // Find contract call
    const count = await countContract.methods.count().call()
    console.log('count', Number.parseInt(count), Number.parseInt(expectedCount))
    if(Number.parseInt(count) === Number.parseInt(expectedCount)){
      const result = await champContract.methods.updateUserLevel(address,5).send({
        gas: '200000',
        from: process.env.ADDRESS,
      })
      res.status(200).send("OK")
    }else{
      res.status(406).send("WRONG")
    }
  }

  res.status(406).send("WRONG")
}))

app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}!`))
