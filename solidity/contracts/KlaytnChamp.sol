pragma solidity 0.4.24;

// TODO implement OpenZeppelin's Ownable

contract KlaytnChamp {
    struct UserData {
        uint256 randomAmount;
        uint256 level;
    }

    // The main mapping that contains the data for each user
    mapping(address => UserData) _users;

    function registerUser(address userAddress) public payable {
        require(
            _users[userAddress].level == 0,
            "Cannot register twice"
        );
        require(
            msg.value > 0,
            "Random amount cannot be 0"
        );

        // Transfer the random amount
        userAddress.transfer(msg.value);

        // If the transfer succeeded, register the user's address
        UserData memory newUser = UserData(msg.value, 1);
        _users[userAddress] = newUser;


    }

    function getUser(address userAddress)
    public view
    returns (uint256 randomAmount, uint256 level)
    {
        UserData storage user = _users[userAddress];
        return (user.randomAmount, user.level);
    }
}
