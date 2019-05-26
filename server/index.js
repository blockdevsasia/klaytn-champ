require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors')
const Caver = require('caver-js')

const cav = new Caver('https://api.baobab.klaytn.net:8651/')
const wrap = require("./middleware/wrap");
const port = 3000

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

const router = require('express-promise-router')();

const PRIVATE_KEY=process.env.PRIVATE_KEY
const ADDRESS=process.env.ADDRESS

app.post('/user/:address', wrap(async (req, res, next) => {
  // TODO: Check if we already sent to the user

  const randomNumber = Math.floor(1 + (Math.random() * 1000000))
  let txParams = {
    from: ADDRESS,
    gasPrice: 25000000000,
    gasLimit: 9900000,
    to: req.params.address,
    value: cav.utils.toHex(randomNumber),
    chainId: 1001,
  };

  const tx = await cav.klay.accounts.signTransaction(txParams, PRIVATE_KEY)
  const result = await cav.klay.sendSignedTransaction(tx.rawTransaction)

  await res.send(result)
}))

app.post('/checkRandomAmount', wrap(async (req, res, next) => {

  const randomNumber = Math.floor(1 + (Math.random() * 1000000))
  let txParams = {
    from: ADDRESS,
    gasPrice: 25000000000,
    gasLimit: 9900000,
    to: req.params.address,
    value: cav.utils.toHex(randomNumber),
    chainId: 1001,
  };

  const tx = await cav.klay.accounts.signTransaction(txParams, PRIVATE_KEY)
  const result = await cav.klay.sendSignedTransaction(tx.rawTransaction)

  await res.send(result)
}))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
