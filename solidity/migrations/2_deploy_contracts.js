var fs = require('fs');

var KlaytnChamp = artifacts.require("./KlaytnChamp.sol");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(KlaytnChamp)
};
