import Caver from 'caver-js'
const Contract = require('src/assets/contracts/KlaytnChamp.json')

const RPC_URL = 'https://api.baobab.klaytn.net:8651'
const CONTRACT_ID = '0x48667D376fc9E5E8D19a6FCeB64C8d4c6E4553b8'

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
