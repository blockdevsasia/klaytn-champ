pragma solidity 0.4.24;

// TODO implement OpenZeppelin's Ownable

contract Champions {
    struct PlayerData {
        uint256 randomAmount;
        uint256 level;
    }

    mapping(address => PlayerData) players;

    function registerPlayer(address playerAddress, uint256 randomAmount) public {
        // TODO Bail if playerAddress already exists
        // TODO Create new struct
        // TODO Store new struct in mapping
    }

    function getPlayer(address playerAddress) public view {
        // TODO Return struct from mapping for playerAddress
    }
}
