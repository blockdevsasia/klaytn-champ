pragma solidity 0.4.24;

contract Ownable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () internal {
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), _owner);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Returns true if the caller is the current owner.
     */
    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * > Note: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public onlyOwner {
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     */
    function _transferOwnership(address newOwner) internal {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

contract KlaytnChamp is Ownable {
    struct UserData {
        uint64 randomAmount;
        uint64 level;
        uint64 certificate;
        bytes32 usernameHash;
    }

    // The main mapping that contains the data for each user
    mapping(address => UserData) _users;

    function registerUser(address userAddress) public payable onlyOwner {
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

    function updateUserLevel(address userAddress, uint256 newLevel) public onlyOwner {
        UserData storage user = _users[userAddress];

        require(user.level > 0, "User has to be registered");
//        require(newLevel > user.level, "New level has to be higher");

        user.level = newLevel;
    }

    function getUser(address userAddress)
    public view
    returns (uint256 randomAmount, uint256 level)
    {
        UserData storage user = _users[userAddress];
        return (user.randomAmount, user.level);
    }
}
