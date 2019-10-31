import Caver from 'caver-js'
const ChampContract = require('src/assets/contracts/KlaytnChamp.json')
export const klaytnEnv = require('../../../lib/environments.js').klaytn[process.env.KLAYTN_ENVIRONMENT.toLowerCase()]

export const CAVER = new Caver(klaytnEnv.api_url)

export const contract = new CAVER.klay.Contract(ChampContract.abi, ChampContract.networks[klaytnEnv.network_id].address)

export default ({ Vue, store }) => {
  // Start polling the Klaytn contract to see if the address has been registered.
  window.setInterval(() => {
    const address = store.getters['user/address']
    if (address) {
      store.dispatch('external/klaytnGetUser', address)
    }
  }, 3000)
}
