pragma solidity ^0.5.0;
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/5b80b35170aac24f43183a1dcf8165bf43f5285b/contracts/token/ERC721/ERC721Metadata.sol

import "@openzeppelin/contracts/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Enumerable.sol";
import "@openzeppelin/contracts/drafts/Strings.sol";

contract ERC721Metadata is Context, ERC165, ERC721Enumerable {

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Base URI
    string private _baseURI;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    /*
     *     bytes4(keccak256('name()')) == 0x06fdde03
     *     bytes4(keccak256('symbol()')) == 0x95d89b41
     *     bytes4(keccak256('tokenURI(uint256)')) == 0xc87b56dd
     *
     *     => 0x06fdde03 ^ 0x95d89b41 ^ 0xc87b56dd == 0x5b5e139f
     */
    bytes4 private constant _INTERFACE_ID_ERC721_METADATA = 0x5b5e139f;

    /**
     * @dev Constructor function
     */
    constructor (string memory name, string memory symbol) public {
        _name = name;
        _symbol = symbol;

        // register the supported interfaces to conform to ERC721 via ERC165
        _registerInterface(_INTERFACE_ID_ERC721_METADATA);
    }

    /**
     * @dev Gets the token name.
     * @return string representing the token name
     */
    function name() external view returns (string memory) {
        return _name;
    }

    /**
     * @dev Gets the token symbol.
     * @return string representing the token symbol
     */
    function symbol() external view returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the concatenation of the base token URI with the URI for a given token ID.
     * Throws if the token ID does not exist. May return an empty string.
     * The usage of concatenation here reduces gas costs when setting a token URI.
     * @param tokenId uint256 ID of the token to query
     */
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return string(abi.encodePacked(_baseTokenURI(), Strings.fromUint256(tokenId)));
    }

    /**
     * @dev Internal function to set the token URI for a given token.
     * Reverts if the token ID does not exist.
     * @param tokenId uint256 ID of the token to set its URI
     * @param uri string URI to assign
     */
    function _setTokenURI(uint256 tokenId, string memory uri) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = uri;
    }

    /**
     * @dev Internal function to get the base token URI.
     * @notice that each token URI will be concatenated to this value when calling tokenURI.
     * @return string representing the base token URI
     */
    function _baseTokenURI() internal view returns (string memory) {
        return _baseURI;
    }

    /**
     * @dev Internal function to set the base token URI.
     * @param uri string base URI to assign
     */
    function _setBaseTokenURI(string memory uri) internal {
        _baseURI = uri;
    }

    /**
     * @dev Internal function to burn a specific token.
     * Reverts if the token does not exist.
     * Deprecated, use _burn(uint256) instead.
     * @param owner owner of the token to burn
     * @param tokenId uint256 ID of the token being burned by the msg.sender
     */
    function _burn(address owner, uint256 tokenId) internal {
        super._burn(owner, tokenId);

        // Clear metadata (if any)
        if (bytes(_tokenURIs[tokenId]).length != 0) {
            delete _tokenURIs[tokenId];
        }
    }
}
