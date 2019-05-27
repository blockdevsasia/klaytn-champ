pragma solidity 0.4.24;

// TODO implement OpenZeppelin's Ownable

contract Champ {
    struct PlayerData {
        uint256 randomAmount;
        uint256 level;
    }

    // The main mapping that contains the data for each player
    mapping(address => PlayerData) _players;

    function registerPlayer(address playerAddress, uint256 randomAmount) public {
        require(
            _players[playerAddress].level == 0,
            "Cannot register twice"
        );

        PlayerData memory newPlayer =  PlayerData(randomAmount, 1);

        _players[playerAddress] = newPlayer;

    }

    function getPlayer(address playerAddress)
    public view
    returns (uint256 randomAmount, uint256 level)
    {
        PlayerData storage player = _players[playerAddress];
        return (player.randomAmount, player.level);
    }
}
