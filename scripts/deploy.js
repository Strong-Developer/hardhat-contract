const { ethers } = require("hardhat");

/// ENTER FOllOWING DETAILS
const NETWORK = "rinkeby";
const TEAM_ADDRESS = "0x6f99e915Ee5B592a1Fd2203e15B0ECc157B535c8";
const FEE = "10000000000000000"; // fee in ETH (1e18 format)
/// ETHER ABOVE DETAILS

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const nftContract = await ethers.getContractFactory("Lunatics");
  const contract = await nftContract.deploy();
  console.log("Token address:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
