pragma solidity ^0.5.6;
import "@openzeppelin/contracts/ownership/Ownable.sol";
import "./ERC721Metadata.sol";

contract KlaytnChamp is Ownable, ERC721Metadata {

    mapping(uint256 => uint128) tokenSerial; // Keeps track of the highest serial numbers (128 rightmost bits) in the TokenId per class (leftmost)

    struct Certificate {
        address userAddress;
        uint64 certificationLevel;
    }

    struct UserData {
        uint64 nonce;
        uint64 level;
        uint64 certificationLevel;
        bytes32 uidHash;
        bytes32 googleHash;
    }

    // The main mapping that contains the data for each user
    mapping(address => UserData) _users;
    mapping(bytes32 => Certificate) _certificates;

    constructor () public ERC721Metadata("Klaytn Champ", "CHAMP") {
        // solhint-disable-previous-line no-empty-blocks
        _setBaseTokenURI("https://klaytn.champ.blockdevs.asia/token/");
    }

    function registerUser(address payable userAddress, bytes32 uidHash, bytes32 googleHash, uint64 nonce) public onlyOwner {
        require(
            _users[userAddress].level == 0,
            "Cannot register twice"
        );
        require(
            nonce > 0,
            "Random amount cannot be 0"
        );
        require(
            nonce < 18446744073709551615,
            "random amount cannot be larger than UINT64 max"
        );

        // If the transfer succeeded, register the user's address
        UserData memory newUser = UserData(nonce, 1, 0, uidHash, googleHash);
        _users[userAddress] = newUser;

        _mint(
            userAddress,
            getNewTokenId(tokenClass(uint64(0)))
        );
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
        _mint(
            userAddress,
            getNewTokenId(tokenClass(newCertificationLevel))
        );
    }

    function getUser(address userAddress)
    public view
    returns (uint64 nonce, uint64 level, uint64 certificationLevel, bytes32 uidHash, bytes32 googleHash)
    {
        UserData storage user = _users[userAddress];
        return (user.nonce, user.level, user.certificationLevel, user.uidHash, user.googleHash);
    }

    function resetUser(address userAddress) public {
        require(msg.sender == userAddress || msg.sender == owner(), "Only user or owner can reset a record");
        UserData storage user = _users[userAddress];

        user.nonce = 0;
        user.level = 0;
        user.certificationLevel = 0;
        user.uidHash = 0x0;
        user.googleHash = 0x0;
    }

    function tokenClass(uint64 certificationLevel)
    internal pure
    returns(uint256)
    {
        return (
        uint256(certificationLevel) << 192           // 256 - 64
        );
    }

    function getNewTokenId(uint256 _tokenClass)
    internal
    returns (uint256)
    {
        tokenSerial[_tokenClass]++;
        return _tokenClass | tokenSerial[_tokenClass];
    }
}
