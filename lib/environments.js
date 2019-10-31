module.exports = {
  klaytn: {
    local: {
      api_url: 'http://localhost:8545',
      network_id: '*'
    },
    testnet: {
      api_url: 'https://api.baobab.klaytn.net:8651',
      scope_url: 'https://baobab-api.scope.klaytn.com/api/',
      network_id: '1001',
      faucet_address: '0xf90675a56a03f836204d66c0f923e00500ddc90a'
    },
    mainnet: {
      api_url: 'https://api.cypress.klaytn.net:8651',
      scope_url: 'https://scope-api.klaytn.com/api/',
      network_id: '8217',
      faucet_address: '0xf90675a56a03f836204d66c0f923e00500ddc90a'
    }
  },

  champ: {
    local: {
      api_host: 'localhost',
      api_port: 3000,
      getApiUrl: function () { return 'http://' + this.api_host + ':' + this.api_port }
    },
    production: {
      api_url: 'klaytn.champ.blockdevs.asia',
      api_port: 3000,
      getApiUrl: function () { return 'http://' + this.api_host + ':' + this.api_port }
    }
  }
}
