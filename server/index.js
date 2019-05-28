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

const caver = new Caver(process.env.URL)
caver.klay.accounts.wallet.add(process.env.PRIVATE_KEY);
const contract = new caver.klay.Contract(Contract.abi, process.env.CONTRACT_ID)

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
    res.status(200).send()
  }catch(err){
    res.status(422).send(err)
  }
}))

app.post('/checkLevel2', wrap(async (req, res, next) => {
  const address = req.body.address

  const balance = await caver.klay.getBalance(address)

  if(caver.utils.fromPeb(balance) > 4){
    try {
      const result = await contract.methods.updateUserLevel(address,2).send({
        gas: '200000',
        from: process.env.ADDRESS,
      })
    }catch(err){
      res.status(422).send(err)
    }

    res.status(200).send("OK")

  }else{
    res.status(200).send("WRONG")
  }



  // try {
  //   const result = await contract.methods.registerUser(address).send({
  //     gas: '200000',
  //     from: process.env.ADDRESS,
  //     value: randomNumber
  //   })
  //   console.log(result)
  //   res.status(200).send()
  // }catch(err){
  //   res.status(422).send(err)
  // }
}))


app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}!`))
