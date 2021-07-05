const ERC20 = artifacts.require("exercise");
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("exercise", (account) =>{
  it("should deploy smart contract", async function () {
    await exercise.deployed();
    return assert.isTrue(true);
  });

});
