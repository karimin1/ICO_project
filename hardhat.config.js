require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
 networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/Ig9Oj2DL0RWEZRqf1mB3Bq0OLyNABiwJ`,
      accounts: ["701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82"],
    },
  },
};
