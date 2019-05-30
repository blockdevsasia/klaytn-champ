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
        uint64 certificationLevel;
        bytes32 googleHash;
        bytes32 linkedinHash;
        bytes32 githubHash;
        bytes32 facebookHash;
    }

    // The main mapping that contains the data for each user
    mapping(address => UserData) _users;

    function registerUser(address userAddress, bytes32 googleHash) public payable onlyOwner {
        require(
            _users[userAddress].level == 0,
            "Cannot register twice"
        );
        require(
            msg.value > 0,
            "Random amount cannot be 0"
        );
        require(
            msg.value < 18446744073709551615,
            "random amount cannot be larger than UINT64 max"
        );

        // Transfer the random amount
        userAddress.transfer(msg.value);

        // If the transfer succeeded, register the user's address
        UserData memory newUser = UserData(uint64(msg.value), 1, 0, 0, 0, 0, 0);
        _users[userAddress] = newUser;
    }

    function updateUserLevel(address userAddress, uint64 newLevel) public onlyOwner {
        UserData storage user = _users[userAddress];

        require(user.level > 0, "User has to be registered");
//        require(newLevel > user.level, "New level has to be higher");

        user.level = newLevel;

    }

    function updateUserCertificationLevel(address userAddress, uint64 newCertificationLevel) public onlyOwner {
        UserData storage user = _users[userAddress];

        require(user.level > 0, "User has to be registered");
        user.certificationLevel = newCertificationLevel;

    }

    function getUser(address userAddress)
    public view
    returns (uint64 randomAmount, uint64 level, uint64 certificationLevel, bytes32 googleHash)
    {
        UserData storage user = _users[userAddress];
        return (user.randomAmount, user.level, user.certificationLevel, user.googleHash);
    }

    function resetUser(address userAddress) public onlyOwner {
        UserData storage user = _users[userAddress];

        user.randomAmount = 0;
        user.level = 0;
        user.certificationLevel = 0;
        user.googleHash = 0x0;
        user.linkedinHash = 0x0;
        user.githubHash = 0x0;
        user.facebookHash = 0x0;
    }

    //TODO: Add search by googleHash to retrieve certificate : return UserData by googleHash
    //
}
