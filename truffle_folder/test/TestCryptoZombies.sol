//pragma solidity ^0.5.0;
pragma solidity ^0.4.25;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptoZombies.sol";
import "../contracts/erc721.sol.sol";
import "../contracts/Migrations.sol";
import "../contracts/ownable.sol";
import "../contracts/safemath.sol";
import "../contracts/zombieattack.sol";
import "../contracts/zombiefactory.sol";
import "../contracts/zombiefeeding.sol";
import "../contracts/zombiehelper.sol";
import "../contracts/zombieownership.sol";

contract TestCryptoZombies {

function testSafeMath_ADD() public {
    CryptoZombies cryptoZombies = CryptoZombies(DeployedAddresses.CryptoZombies());
    uint256 result_add = cryptoZombies.my_add(5);
    uint expectedValue = 6;
    Assert.equal(result_add, expectedValue, "Value of 'result_add' should be equal 6");
  }

function testSafeMath_SUB() public {
    CryptoZombies cryptoZombies = CryptoZombies(DeployedAddresses.CryptoZombies());
    uint256 result_sub = cryptoZombies.my_sub(40);
    uint expectedValue = 39;
    Assert.equal(result_sub, expectedValue, "Value of 'result_sub' should be equal 39");
  }

}
