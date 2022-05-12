const CryptoZombies = artifacts.require("CryptoZombies");
contract("SafeMath_ADD test", async accounts => {
    it("result_add should return 7", async() => {
        var instance = await CryptoZombies.deployed();
        var result_add = await instance.my_add.call(6);
        assert.equal(result_add.valueOf(), 7);
    });
    it("result_sub should return 39", async() => {
        var instance = await CryptoZombies.deployed();
        var result_sub = await instance.my_sub.call(40);
        assert.equal(result_sub.valueOf(), 39);
    });
});
