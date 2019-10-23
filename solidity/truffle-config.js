const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const BAOBAB_NETWORK_ID = '1001'
const GASLIMIT = '8500000'

const BAOBAB_URL = `https://api.baobab.klaytn.net:8651`
const PRIVATE_KEY = '0xa0f0e2350fec1fe054ce7d8e2b183e439ac3fc6a030337d7e6fa82ec1d531a49'

module.exports = {
  networks: {
    development: {
      provider: new HDWalletProvider(PRIVATE_KEY, BAOBAB_URL),
      network_id: BAOBAB_NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
