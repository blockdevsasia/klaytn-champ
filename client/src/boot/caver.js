import Caver from 'caver-js'
const Contract = require('src/assets/contracts/KlaytnChamp.json')

export const CAVER = new Caver(process.env.BAOBAB_API_URL)

export const contract = new CAVER.klay.Contract(Contract.abi, process.env.CONTRACT_ID)

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
