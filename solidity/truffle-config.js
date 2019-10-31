require('dotenv').config()

const HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const env = require('./environments.js')
const GASLIMIT = '8500000'

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 8545,
      network_id: env.klaytn.local.network_id
    },
    testnet: {
      provider: new HDWalletProvider(process.env.ADMIN_PRIKEY, env.klaytn.testnet.api_url),
      network_id: env.klaytn.testnet.network_id,
      gas: GASLIMIT,
      gasPrice: null
    },
    mainnet: {
      provider: new HDWalletProvider(process.env.ADMIN_PRIKEY, env.klaytn.mainnet.api_url),
      network_id: env.klaytn.mainnet.network_id,
      gas: GASLIMIT,
      gasPrice: null
    }
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
