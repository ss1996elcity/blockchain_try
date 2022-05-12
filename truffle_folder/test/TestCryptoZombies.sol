//pragma solidity ^0.5.0;
pragma solidity ^0.4.25;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptoZombies.sol";
import "../contracts/ZombieFactory.sol";


contract TestCryptoZombies {

function testSafeMath_ADD() public {
    ZombieFactory zombieFactory = ZombieFactory(DeployedAddresses.ZombieFactory());
    uint256 result_add = zombieFactory.my_add(5);
    uint expectedValue = 6;
    Assert.equal(result_add, expectedValue, "Value of 'result_add' should be equal 6");
  }

function testSafeMath_SUB() public {
    ZombieFactory zombieFactory = ZombieFactory(DeployedAddresses.ZombieFactory());
    uint256 result_sub = zombieFactory.my_sub(40);
    uint expectedValue = 39;
    Assert.equal(result_sub, expectedValue, "Value of 'result_sub' should be equal 39");
  }

}
