require('dotenv').config()
const Caver = require('caver-js')
const klaytnEnv = require('../environments.js').klaytn.mainnet
const caver = new Caver(klaytnEnv.api_url)

const ChampContract = require('../build/contracts/KlaytnChamp.json')
const byteCode = ChampContract.bytecode
// const champContract = new caver.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

const sender = caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const feePayer = caver.klay.accounts.wallet.add(process.env.FEEPAYER_PRIKEY)

async function deployDelegated () {
  try {
    const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
      type: 'FEE_DELEGATED_SMART_CONTRACT_DEPLOY',
      from: sender.address,
      data: byteCode,
      gas: '3000000',
      gasPrice: '25000000000',
      value: 0
    }, sender.privateKey)

    console.log('got txn')
    const receipt = await caver.klay.sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: feePayer.address,
      gas: '3000000',
      gasPrice: '25000000000',
      value: 0
    })
    console.log(receipt)
  } catch (err) {
    console.error(err)
  }
}

deployDelegated()
