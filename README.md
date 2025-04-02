# Pension System Portal

## Overview
The **Pension System Portal** is a blockchain-based decentralized application (DApp) designed to manage pension contributions and withdrawals efficiently. This smart contract enables users to contribute towards their pension, retire, and withdraw pension funds at scheduled intervals.

## Features
- Users can contribute funds to their pension accounts.
- Users can mark themselves as retired to become eligible for pension withdrawals.
- Retired users can withdraw funds at fixed intervals.
- Secure and transparent transactions powered by Ethereum blockchain.

## Tech Stack
- **Blockchain:** Ethereum
- **Smart Contract Language:** Solidity ^0.8.0
- **Framework:** Hardhat
- **Frontend:** React.js (if applicable)
- **Backend:** Node.js, Express.js
- **Web3 Interaction:** Ethers.js, Web3.js
- **Wallet Integration:** MetaMask

## Smart Contract
The pension system is implemented as a Solidity smart contract, ensuring security and immutability. Key functionalities include:

### 1. **Contributing to Pension**
Users can send ETH to the smart contract, which is recorded as their pension contribution.

### 2. **Retirement Declaration**
Users can declare themselves retired, making them eligible for pension withdrawals.

### 3. **Pension Withdrawal**
Retired users can withdraw funds at fixed intervals (30 days) if they have sufficient balance.

## Deployment
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)
- Solidity ^0.8.0

### Steps to Deploy
1. Clone the repository:
   ```sh
   git clone [https://github.com/yourusername/pension-system-portal.git](https://github.com/bendalejatin/BlockChain_Project.git)
   cd pension-system-portal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile the smart contract:
   ```sh
   npx hardhat compile
   ```
4. Deploy the contract to a test network (e.g., Goerli, Sepolia):
   ```sh
   npx hardhat run scripts/deploy.js --network goerli
   ```
5. Interact with the contract using Ethers.js or Web3.js.

## Usage
- Contribute to pension:
  ```sh
  contract.contributeToPension({ value: ethers.utils.parseEther("1") });
  ```
- Declare retirement:
  ```sh
  contract.retire();
  ```
- Withdraw pension:
  ```sh
  contract.withdrawPension(ethers.utils.parseEther("0.5"));
  ```

## Events
- `PensionContribution(address indexed pensioner, uint256 amount)`: Triggered when a user contributes funds.
- `PensionWithdrawn(address indexed pensioner, uint256 amount)`: Triggered when a user withdraws pension funds.

## Security Considerations
- Ensures only retired users can withdraw funds.
- Implements time-based withdrawal restrictions.
- Uses Solidity best practices for security and gas optimization.

## Contact
For inquiries, reach out at [bendalejatin35@gamil.com](mailto:bendalejatin35@gamil.com).

