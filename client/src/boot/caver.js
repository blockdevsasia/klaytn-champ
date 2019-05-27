import Caver from 'caver-js'

export const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651'
}

export const CAVER = new Caver(config.rpcURL)

export default ({ Vue }) => {
  Vue.prototype.$caver = CAVER
}
