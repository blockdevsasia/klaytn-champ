require('dotenv').config()
const Caver = require('caver-js')
const { deployContractDelegated } = require('./utils.js')

const contractJsonPath = process.cwd() + '/build/contracts/KlaytnChamp.json'
const byteCode = require(contractJsonPath).bytecode
const klaytnEnv = require('../environments.js').klaytn.mainnet
const caver = new Caver(klaytnEnv.api_url)

const sender = caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const payer = caver.klay.accounts.wallet.add(process.env.FEEPAYER_PRIKEY, process.env.FEEPAYER_ADDRESS)

deployContractDelegated(caver, sender, payer, byteCode).then((contractReceipt) => {
  let contractJson = require(contractJsonPath)

  const deployJson = {
    'address': contractReceipt.contractAddress,
    'transactionHash': contractReceipt.transactionHash
  }

  console.log('Contract deployed: ', deployJson)

  contractJson.networks['8217'] = deployJson

  require('fs').writeFileSync(contractJsonPath, JSON.stringify(contractJson, null))
})
