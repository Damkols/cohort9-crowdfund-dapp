import { useEffect, useState } from "react";
import { ethers } from "ethers";
import useCampaignNo from "../hooks/useCampaignNo";
import { useConnection } from "../context/connection";
import abi from "../abi/abi.json";

const useGetAllCampaigns = () => {
 const [campaigns, setCampaigns] = useState([]);
 const { provider, contractAddress } = useConnection();
 const campaignNo = useCampaignNo();

 console.log(campaignNo);
 useEffect(() => {
  const fetchAllCampaigns = async () => {
   try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const campaignDetails = await Promise.all(
     Array.from({ length: Number(campaignNo) }, (_, i) => i + 1).map(
      async (id) => {
       const details = await contract.crowd(id);
       return {
        id,
        title: details.title,
        fundingGoal: Number(details.fundingGoal),
        owner: details.owner,
        durationTime: Math.round(Number(details.durationTime) / 86400),
        isActive: details.isActive,
        fundingBalance: Number(details.fundingBalance),
        contributors: details.contributors,
       };
      }
     )
    );

    console.log(campaignDetails);

    setCampaigns(campaignDetails);
   } catch (error) {
    console.error("Error fetching campaigns:", error);
   }
  };

  fetchAllCampaigns();
 }, [contractAddress, campaignNo, provider]);
 return campaigns;
};

export default useGetAllCampaigns;
