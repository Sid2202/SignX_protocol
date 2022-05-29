//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
//solidity code
contract SignX {
    uint totalSigns;

    event NewSigner(address indexed from, uint256 timestamp, string signercode, string signcode);

    struct Signers{
        address Signer;
        string signercode;
        string signcode;
        uint256 timestamp;
    }
    Signers[] signs;

    constructor(){
        console.log("Deploying SignX smart contract:");
    }   

function sign(string memory _signercode, string memory _signcode) public {
        // console.log("%s waved w/ uid %s", msg.sender, _uid);

        signs.push(Signers(msg.sender, _signercode, _signcode ,block.timestamp));
        emit NewSigner(msg.sender, block.timestamp, _signercode, _signcode);
    }

    // function getAllSigners() public view returns (Signers[] memory) {
    //     return signs;
    // }


// function data() public view returns(string memory){
//     return uid;
// }
// function setdata(string memory _uid) public {
//       console.log("Changing greeting from '%s' to '%s'", uid, _uid); // print to the console
//       uid = _uid;
//   }
}