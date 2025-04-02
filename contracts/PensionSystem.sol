// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PensionSystem {
    struct Pensioner {
        address pensionerAddress;
        uint256 totalContributions;
        uint256 lastWithdrawTime;
        bool isRetired;
    }
    mapping(address => Pensioner) public pensioners;
    address public admin;
    uint256 public retirementAge = 60;
    uint256 public payoutInterval = 30 days;

    event PensionContribution(address indexed pensioner, uint256 amount);
    event PensionWithdrawn(address indexed pensioner, uint256 amount);

    constructor() {
        admin = msg.sender;
    }

    function contributeToPension() public payable {
        require(msg.value > 0, "Contribution must be greater than zero");
        pensioners[msg.sender].totalContributions += msg.value;
        emit PensionContribution(msg.sender, msg.value);
    }

    function retire() public {
        require(pensioners[msg.sender].totalContributions > 0, "No contributions found");
        pensioners[msg.sender].isRetired = true;
    }

    function withdrawPension(uint256 amount) public {
        require(pensioners[msg.sender].isRetired, "Not eligible for withdrawal");
        require(block.timestamp >= pensioners[msg.sender].lastWithdrawTime + payoutInterval, "Withdrawal not yet allowed");
        require(amount <= pensioners[msg.sender].totalContributions, "Insufficient balance");
        pensioners[msg.sender].totalContributions -= amount;
        pensioners[msg.sender].lastWithdrawTime = block.timestamp;
        payable(msg.sender).transfer(amount);
        emit PensionWithdrawn(msg.sender, amount);
    }
}