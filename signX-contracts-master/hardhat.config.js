require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig

*/


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.4', // make sure the version matches the one in smart contract file 
networks: {
  hardhat: {},
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/IelsBzoOvhc3ZqK3ZcRwuvvpAlIfhBMa", // rinkeby key 
    accounts: ['0xfb41f92fed8e313336aa72a765e227e543bbe9e5311ed61361b8908fa2923942'], // metamask privte key- DO NOT SHARE THIS!! It has access to all your accounts
  },
},
};
