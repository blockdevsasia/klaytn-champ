const rp = require('request-promise-native')

const getTransactionsForAddress = async function (address) {
  var options = {
    uri: 'https://baobab.klaytnscope.com/api/transactions?',
    qs: {
      account: address,
      size: 100
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  }

  const result = await rp(options)

  return result.result.transactions
}

const getTransactionByHash = async function (txHash) {
  var options = {
    uri: 'https://baobab.klaytnscope.com/api/transaction/' + txHash,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  }

  const result = await rp(options)

  return result.result
}


/**
 *
 * @param address
 * @param txMatcher
 * @param txDetailMatcher
 * @returns {Promise<Array>}
 * @example
   helpers.findTransactionsBy(
     "0x7d182a15f14c0e8cd480a7e2add5957de3eec69f",
     async tx =>
      tx.to === CONTRACT && tx.gasUsed > 35000 && tx.gasUsed < 50000,
     async tx =>
      tx.input.indexOf(HEX) > -1
     ).then((result) => {
      console.log('Inner Hex ', result)
  })
 */
const findTransactionsBy = async function (address, txMatcher, txDetailMatcher = null) {
  const txs = await getTransactionsForAddress(address)
  let result = []

  for(let tx of txs){
    if(await txMatcher(tx)){
      if(txDetailMatcher !== null){
        const innerTx = await getTransactionByHash(tx.txHash)
        if(await txDetailMatcher(innerTx)) result.push(innerTx)
      }else{
        result.push(tx)
      }
    }
  }

  return result
}

const generateRandomAmount = async function () {


  return 0  // TODO
}

exports.generateRandomAmount = generateRandomAmount
exports.findTransactionsBy = findTransactionsBy
