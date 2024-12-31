/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY =
  "322a9117db7bc5a0a93909a4de7a2920452777d56dbeef68d8531a6fc0cc4d86";
const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";
const AMOY_RPC_URL = "https://rpc-amoy.polygon.technology"; // Polygon Amoy RPC
module.exports = {
  defaultNetwork: "polygon_amoy",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon_amoy: {
      url: AMOY_RPC_URL,
      chainId: 80002, // Polygon Amoy chain ID
      accounts: [`0x${PRIVATE_KEY}`], // Amoy testnet
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
