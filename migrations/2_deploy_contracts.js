var TtdmToken = artifacts.require("./TtdmToken.sol");
var TtdmTokenSale = artifacts.require("./TtdmTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(TtdmToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(TtdmTokenSale, TtdmToken.address, tokenPrice);
  });
};
