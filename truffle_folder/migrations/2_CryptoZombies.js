var MyContract = artifacts.require("CryptoZombies");
module.exports = function(deployer) {
// deployment steps
deployer.deploy(MyContract);
};
