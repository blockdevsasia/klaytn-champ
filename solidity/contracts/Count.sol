// Klaytn IDE uses solidity 0.4.24 version.
pragma solidity 0.4.24;

contract Count {
    // Storage variable `count` (type: uint256)
    uint256 public count = 0;


    // Get current node's block number.
    function getBlockNumber() public view returns (uint256) {
        return block.number;
    }

    // Set value of storage variable `count`.
    function setCount(uint256 _count) public {
        count = _count * block.number;
    }
}
