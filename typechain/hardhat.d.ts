/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CalHash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CalHash__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ISaitaSwapCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISaitaSwapCallee__factory>;
    getContractFactory(
      name: "ISaitaSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISaitaSwapERC20__factory>;
    getContractFactory(
      name: "ISaitaSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISaitaSwapFactory__factory>;
    getContractFactory(
      name: "ISaitaSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISaitaSwapPair__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "SaitaSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SaitaSwapERC20__factory>;
    getContractFactory(
      name: "SaitaSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SaitaSwapFactory__factory>;
    getContractFactory(
      name: "SaitaSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SaitaSwapPair__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;

    getContractAt(
      name: "CalHash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CalHash>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ISaitaSwapCallee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISaitaSwapCallee>;
    getContractAt(
      name: "ISaitaSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISaitaSwapERC20>;
    getContractAt(
      name: "ISaitaSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISaitaSwapFactory>;
    getContractAt(
      name: "ISaitaSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISaitaSwapPair>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "SaitaSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SaitaSwapERC20>;
    getContractAt(
      name: "SaitaSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SaitaSwapFactory>;
    getContractAt(
      name: "SaitaSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SaitaSwapPair>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}