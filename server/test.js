const { describe, it } = require('mocha')

require('dotenv').config()
const Caver = require('caver-js')
const klaytnEnv = require('./environments.js').klaytn[process.env.KLAYTN_ENVIRONMENT.toLowerCase()]
// const champEnv = require('./environments.js').champ[process.env.CHAMP_ENVIRONMENT.toLowerCase()]
const caver = new Caver(klaytnEnv.api_url)

const BN = caver.utils.BN

const bnChai = require('bn-chai')

require('chai')
  .use(require('chai-as-promised'))
  .use(bnChai(BN))
  .should()

const ChampContract = require('./KlaytnChamp.json')

const champContract = new caver.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

const sender = caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const feePayer = caver.klay.accounts.wallet.add(process.env.FEEPAYER_PRIKEY)

// https://docs.klaytn.com/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractexecution

describe('#ChampContract', function () {
  it('Sign for fee delegation', async () => {
    const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
      data: champContract.methods.resetUser('0x9bad2a106d44442528bf8ad0b5864a9e663f0dcb').encodeABI(),
      type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
      to: ChampContract.networks[klaytnEnv.network_id].address,
      gas: '200000',
      from: sender.address
    }, sender.privateKey)

    const receipt = await caver.klay.sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: feePayer.address
    })

    console.log(receipt)
  }).timeout(10000)
})
