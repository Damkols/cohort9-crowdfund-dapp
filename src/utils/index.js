import { ethers } from "ethers";
import { supportedChains } from "../constants";

export const isSupportedChain = (chainId) =>
 supportedChains.includes(Number(chainId));

export const shortenAccount = (account) =>
 `${account.substring(0, 6)}...${account.substring(38)}`;

export const getReadOnlyProvider = () =>
 new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/5b887901bcee46279c3803899a48c5a0"
 );
