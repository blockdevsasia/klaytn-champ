
var KlaytnChamp = artifacts.require("KlaytnChamp");
module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(KlaytnChamp)
};
