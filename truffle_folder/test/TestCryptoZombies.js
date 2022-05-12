const CryptoZombies = artifacts.require("CryptoZombies");
contract("SafeMath_ADD test", async accounts => {
    it("result_add should return 7", async() => {
        var instance = await CryptoZombies.deployed();
        var result_add = await instance.my_add(6);
        assert.equal(result_add, 7);
    });
    it("result_sub should return 39", async() => {
        var instance = await CryptoZombies.deployed();
        var result_sub = await instance.my_sub(40);
        assert.equal(result_sub, 39);
    });
});
