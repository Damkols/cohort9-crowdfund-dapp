import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import useCampaignNo from "../hooks/useCampaignNo";
import { useConnection } from "../context/connection";
import abi from "../abi/abi.json";

const AllCampaigns = () => {
 const [campaigns, setCampaigns] = useState([]);
 const { provider, contractAddress } = useConnection();
 const campaignNo = useCampaignNo();

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
       fundingGoal: details.fundingGoal,
       owner: details.owner,
       durationTime: details.durationTime,
       isActive: details.isActive,
       fundingBalance: details.fundingBalance,
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

 useEffect(() => {
  fetchAllCampaigns();
 }, [contractAddress]);

 return (
  <div className="campaign-list">
   <h2>List of Campaigns</h2>
   <ul className="campaign-grid">
    {campaigns.map((campaign) => (
     <li key={campaign.id} className="campaign-card">
      <h3 className="campaign-title">{campaign.title}</h3>
      <p className="campaign-info">ID: {campaign.id}</p>
      <p className="campaign-info">Funding Goal: {campaign.fundingGoal}</p>
      <p className="campaign-info">Owner: {campaign.owner}</p>
      <p className="campaign-info">Duration: {campaign.durationTime}</p>
      <p className="campaign-info">
       Active: {campaign.isActive ? "Yes" : "No"}
      </p>
      <p className="campaign-info">
       Funding Balance: {campaign.fundingBalance}
      </p>
      <p className="campaign-info">
       Contributors:{" "}
       {campaign.contributors ? campaign.contributors.join(", ") : "None"}
      </p>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default AllCampaigns;
