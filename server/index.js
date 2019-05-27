const Contract = require('../solidity/build/contracts/KlaytnChamp.json')

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Caver = require('caver-js')
const wrap = require("./middleware/wrap")

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cav = new Caver(process.env.URL)
cav.klay.accounts.wallet.add(process.env.PRIVATE_KEY);
const contract = new cav.klay.Contract(Contract.abi, process.env.CONTRACT_ID)

app.get('/getOurPlayer', wrap(async (req, res, next) => {
  const result = await contract.methods.getPlayer("0xe23a66edbdec3c716e1d5fc14d4d4b40ee3d2b41").call()
  res.status(200).send(result)
}))

app.post('/registerUser', wrap(async (req, res, next) => {
  const address = req.body.address

  const randomNumber = Math.floor(1 + (Math.random() * 1000000))

  try {
    const result = await contract.methods.registerUser(address).send({
      gas: '200000',
      from: process.env.ADDRESS,
      value: randomNumber
    })
    console.log(result)
    res.status(200).send()
  }catch(err){
    res.status(422).send(err)
  }
}))

app.post('/checkAmount', wrap(async (req, res, next) => {
  try {
    const result = await contract.methods.registerPlayer(req.params.address).send({
      gas: '200000',
      from: ADDRESS
    })
    res.status(200).send()
  }catch(err){
    res.status(404).send()
  }
}))


app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${PORT}!`))
