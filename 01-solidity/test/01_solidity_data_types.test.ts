import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SolidityDataTypes", function () {
  async function deploy() {
    const [account1] = await hre.ethers.getSigners(); // create dummy account

    const SolidityDataTypes = await hre.ethers.getContractFactory(
      "SolidityDataTypes"
    ); // Search repo of "SolidityDataTypes"
    const ctcSolidityDataTypes = await SolidityDataTypes.deploy(); //deployed solidity 

    return { ctcSolidityDataTypes, account1 };
  }

  describe("Deployment", function () {
    it("should call constructor", async function () {
      const { ctcSolidityDataTypes } = await loadFixture(deploy);

      expect(ctcSolidityDataTypes).not.to.be.undefined;
    });
  });
});