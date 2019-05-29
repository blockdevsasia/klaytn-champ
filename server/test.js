const helpers = require('./helpers.js')
require('dotenv').config()

const ADDRESS = "0x7d182a15f14c0e8cd480a7e2add5957de3eec69f"
const CONTRACT = '0x737cc2910919c848fcda9779708285369d3cb377'
const HEX = '0004d2'


/* -------------------------- FIND BY INNER HEX --------------------------------------------

helpers.findTransactionsBy(
  ADDRESS,
  async tx =>
    tx.to === CONTRACT && tx.gasUsed > 35000 && tx.gasUsed < 50000,
  async tx =>
    tx.input.indexOf(HEX) > -1
).then((result) => {
  console.log('Inner Hex ', result)
})
*/

/* -------------------------- FROM FAUCET  --------------------------------------------
helpers.findTransactionsBy(
  ADDRESS,
  async tx =>
    tx.type === 'TxTypeValueTransfer' && tx.gasUsed < 30000 && tx.from === process.env.FAUCET_ADDRESS,
  null
).then((result) => {
  console.log('fromFaucet', result)
})
*/

/* -------------------------- BY TX HASH  --------------------------------------------
helpers.findTransactionsBy(
  ADDRESS,
  async tx =>
    tx.txHash === '0xfc64b01101035cfcf61e2201423ff872458d881042408c959769f44a95ea003c',
  async tx => true
).then((result) => {
  console.log('byTxHash', result)
})
*/

/* -------------------------- CONTRACT CALL  --------------------------------------------
helpers.findTransactionsBy(
  ADDRESS,
  async tx =>
    tx.to === CONTRACT && tx.type === 'TxTypeLegacyTransaction',
  async tx => true
).then((result) => {
  console.log('contractAddress', result)
})
*/

/* -------------------------- Level 5  --------------------------------------------*/

helpers.findTransactionsBy(
  ADDRESS,
  async tx =>
    tx.to === "0x737cC2910919c848Fcda9779708285369D3cb377" && tx.type === 'TxTypeLegacyTransaction',
  async tx => true
).then((result) => {
  console.log('contractAddress', result)
})

