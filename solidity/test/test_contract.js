/* eslint no-undef: 0 */
const assert = require('assert')
require('dotenv').config()
const Caver = require('caver-js')
const klaytnEnv = require('../environments.js').klaytn[process.env.KLAYTN_ENVIRONMENT.toLowerCase()]
const caver = new Caver(klaytnEnv.api_url)

const BN = caver.utils.BN

const uid = 'UID'
const google = 'caspar.oostendorp@gmail.com'
const uidHash = caver.utils.keccak256(uid)
const googleHash = caver.utils.keccak256(google)

const bnChai = require('bn-chai')

require('chai')
  .use(require('chai-as-promised'))
  .use(bnChai(BN))
  .should()

// const assertEventVar = (transaction, eventName, eventVar, equalVar) => {
//   const event = transaction.logs.find(log => log.event === eventName)
//   assert.equal(event.args[eventVar], equalVar, `Event ${event.args[eventVar]} didn't happen`)
// }

const ChampContract = require('../build/contracts/KlaytnChamp.json')

const champ = new caver.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

var alice = caver.klay.accounts.wallet.create(1, 'alice')[0].address

const sender = caver.klay.accounts.wallet.add(process.env.ADMIN_PRIKEY)
const payer = caver.klay.accounts.wallet.add(process.env.FEEPAYER_PRIKEY, process.env.FEEPAYER_ADDRESS)

let lastEventsBlock = 11656735

// https://docs.klaytn.com/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractexecution

async function executeMethod (call, options) {
  if (process.env.KLAYTN_ENVIRONMENT === 'MAINNET') {
    // If we're executing on mainnet, use fee delegate process
    const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
      data: call.encodeABI(),
      type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
      to: ChampContract.networks[klaytnEnv.network_id].address,
      gas: '3000000',
      from: sender.address
    }, sender.privateKey)

    const receipt = await caver.klay.sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: payer.address
    })

    return receipt
  } else {
    return call.send(options)
  }
}

async function getLastTransferEvent (contract) {
  const events = await contract.getPastEvents('Transfer', { fromBlock: lastEventsBlock })
  const event = events[events.length - 1]
  lastEventsBlock = event.blockNumber
  return event
}

describe('#ChampContract', function () {
  it('Register a user, and reset', async () => {
    try {
      // ------------- REGISTER ----------------------------------
      const none = await champ.methods.getUser(alice).call()

      const registerResult = await executeMethod(champ.methods.registerUser(
        alice,
        uidHash,
        googleHash,
        1234
      ))
      const user = await champ.methods.getUser(alice).call()
      const event1 = await getLastTransferEvent(champ)

      assert(event1.returnValues['to'].toLowerCase() == alice.toLowerCase(), 'Event to')

      assert(user.uidHash == uidHash, 'uidHash')
      assert(user.googleHash == googleHash, 'googleHash')

      // ------------- GET BADGE 0 ----------------------------------
      const event2 = await getLastTransferEvent(champ)
      const initialToken = event2.returnValues['tokenId']
      console.log('badge0', initialToken)
      const badge0tokenuri = await champ.methods.tokenURI(initialToken).call()
      console.log('badge0 uri', badge0tokenuri)

      // ------------- LEVELUP ----------------------------------
      await executeMethod(champ.methods.updateUserLevel(
        alice,
        1
      ))
      const userLevel1 = await champ.methods.getUser(alice).call()
      // eslint-disable-next-line eqeqeq
      assert(userLevel1.level == 1, 'user level has to be 1')

      // ------------- CERTIFICATION LEVELUP ----------------------------------
      const certLevelUpResult = await executeMethod(champ.methods.updateUserCertificationLevel(
        alice,
        1
      ))
      const userLevel6 = await champ.methods.getUser(alice).call()
      // eslint-disable-next-line eqeqeq
      assert(userLevel6.certificationLevel == 1, 'user certlevel has to be 1')
      const event3 = await getLastTransferEvent(champ)
      const nextToken = event3.returnValues['tokenId']

      // ------------- TOKENURI ----------------------------------
      const badge1tokenuri = await champ.methods.tokenURI(nextToken).call()
      console.log('badge1 uri', badge1tokenuri)

      // ------------- RESET ----------------------------------
      await executeMethod(champ.methods.resetUser(
        alice
      ))
      const userResetted = await champ.methods.getUser(alice).call()
    } catch (err) {
      console.error(err)
    }
  }).timeout(120000)

  /*
it('Sign for fee delegation', async () => {
  // Publish to mainnet

  // Call reset
  const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
    data: champ.methods.resetUser('0x9bad2a106d44442528bf8ad0b5864a9e663f0dcb').encodeABI(),
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
*/
})
