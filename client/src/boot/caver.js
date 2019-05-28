import Caver from 'caver-js'
const Contract = require('src/assets/contracts/KlaytnChamp.json')

const RPC_URL = 'https://api.baobab.klaytn.net:8651'
const CONTRACT_ID = '0xc21C1C7f30c8Dc2115c3b18a471A4c0Bc81B1973'

export const CAVER = new Caver(RPC_URL)

export const contract = new CAVER.klay.Contract(Contract.abi, CONTRACT_ID)

export default ({ Vue, store }) => {
  // Start polling the Klaytn contract to see if the address has been registered.
  window.setInterval(() => {
    const address = store.getters['user/address']
    if (address) {
      store.dispatch('external/klaytnGetUser', address)
    }
  }, 3000)

  Vue.prototype.$caver = CAVER
}
