import Caver from 'caver-js'

export const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651'
}

export const CAVER = new Caver(config.rpcURL)

export default ({ Vue, store }) => {
  // Start polling the Klaytn contract to see if the address has been registered.
  window.setInterval(() => {
    if (store.state.user.address) {
      store.dispatch('external/klaytnGetUser', store.state.user.address)
    }
  }, 3000)

  Vue.prototype.$caver = CAVER
}
