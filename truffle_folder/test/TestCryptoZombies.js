const CryptoZombies = artifacts.require("CryptoZombies");
contract("SafeMath_ADD test", async accounts => {
    it("result_add should return 7", async() => {
        let instance = await CryptoZombies.deployed();
        let result_add = await instance.my_add(6);
        assert.equal(result_add.valueOf(), 7);
    });
    it("result_sub should return 39", async() => {
        let instance = await CryptoZombies.deployed();
        let result_sub = await instance.my_sub(40);
        assert.equal(result_sub.valueOf(), 39);
    });
});
