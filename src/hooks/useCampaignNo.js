import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useConnection } from "../context/connection";
import abi from "../abi/abi.json";

const useCampaignNo = () => {
 const [campaignCount, setCampaignCount] = useState(0);
 const { provider, contractAddress } = useConnection();

 //  const rpcProvider = new ethers.JsonRpcProvider(
 //   "https://sepolia.infura.io/v3/5b887901bcee46279c3803899a48c5a0"
 //  );

 useEffect(() => {
  const fetchCampaignCount = async () => {
   try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const count = await contract.id();
    setCampaignCount(Number(count));
   } catch (error) {
    console.error("Error fetching campaign count:", error);
   }
  };

  fetchCampaignCount();
 }, [contractAddress, provider]);
 return campaignCount;
};

export default useCampaignNo;
