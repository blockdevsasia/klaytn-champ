pragma solidity ^0.5.6;

contract Count {
    // Storage variable `count` (type: uint256)
    uint256 public count = 0;

    // Get current node's block number.
    function getBlockNumber() public view returns (uint256) {
        return block.number;
    }

    // Set value of storage variable `count`.
    function setCount(uint256 _count) public {
        count = _count;
    }
}
