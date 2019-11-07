/* eslint-disable no-unused-vars, no-undef, no-unused-expressions,no-extend-native, eqeqeq */

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

const KlaytnChamp = artifacts.require('KlaytnChamp')

const assertEventVar = (transaction, eventName, eventVar, equalVar) => {
  const event = transaction.logs.find(log => log.event === eventName)
  assert.equal(event.args[eventVar], equalVar, `Event ${event.args[eventVar]} didn't happen`)
}

Number.prototype.pad = function (size) {
  let s = String(this)
  while (s.length < (size || 2)) {
    s = '0' + s
  }
  return s
}

contract('KlaytnChamp', accounts => {
  let champ
  const [alice, bob, carlos, donna] = accounts

  beforeEach(async () => {
    champ = await KlaytnChamp.new()
  })

  it('Is KlaytnChamp deployed', async () => {
    champ.address.should.not.be.null

    const name = await champ.name.call()
    name.should.be.equal('Klaytn Champ')

    const symbol = await champ.symbol.call()
    symbol.should.be.equal('CHAMP')
  })

  it('Register a user, and reset', async () => {
    // ------------- REGISTER ----------------------------------
    const registerResult = await champ.registerUser(
      alice,
      uidHash,
      googleHash,
      { from: alice, value: 1231231 }
    )
    const user = await champ.getUser(alice)
    user.uidHash.should.be.equal(uidHash)
    user.googleHash.should.be.equal(googleHash)

    // ------------- GET BADGE 0 ----------------------------------
    assertEventVar(registerResult, 'Transfer', 'to', alice)
    const initialToken = registerResult.logs[0].args.tokenId
    console.log('badge0', initialToken)

    // ------------- LEVELUP ----------------------------------
    await champ.updateUserLevel(
      alice,
      1,
      { from: alice }
    )
    const userLevel1 = await champ.getUser(alice)
    assert(userLevel1.level == 1, 'user level has to be 1')

    // ------------- CERTIFICATION LEVELUP ----------------------------------
    const certLevelUpResult = await champ.updateUserCertificationLevel(
      alice,
      1,
      { from: alice }
    )
    const userLevel6 = await champ.getUser(alice)
    assert(userLevel6.certificationLevel == 1, 'user certlevel has to be 1')
    const nextToken = certLevelUpResult.logs[0].args.tokenId
    assertEventVar(certLevelUpResult, 'Transfer', 'to', alice)

    // ------------- TOKENURI ----------------------------------
    const badge1tokenuri = await champ.tokenURI(
      nextToken,
      { from: alice }
    )
    console.log('badge1 uri', badge1tokenuri)

    // ------------- RESET ----------------------------------
    await champ.resetUser(
      alice,
      { from: alice }
    )
    const userResetted = await champ.getUser(alice)
    userResetted.uidHash.should.be.equal('0x0000000000000000000000000000000000000000000000000000000000000000')
    userResetted.googleHash.should.be.equal('0x0000000000000000000000000000000000000000000000000000000000000000')
  }).timeout(10000)
})
