const exercise = artifacts.require("exercise");
module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(exercise);
};