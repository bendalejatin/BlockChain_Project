const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("PensionSystem");

  console.log("Deploying MyContract...");
  
  // Deploy contract
  const myContract = await MyContract.deploy(); // ✅ Correct way to deploy
  
  // Wait for deployment to be mined
  await myContract.waitForDeployment(); // ✅ Updated to `waitForDeployment()` in ethers v6

  console.log("MyContract deployed to:", await myContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
