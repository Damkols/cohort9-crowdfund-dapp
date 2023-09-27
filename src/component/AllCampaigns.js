import React from "react";
import useGetAllCampaigns from "../hooks/useGetAllCampaigns";

const AllCampaigns = () => {
 const getAllCampaign = useGetAllCampaigns();

 return (
  <div className="campaign-list">
   <div className="flex py-4 justify-center items-center font-bold">
    <h2 className="inline-flex justify-center rounded-md bg-green-400 px-4 py-4 text-xl font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
     List of Campaigns
    </h2>
   </div>
   <ul className="campaign-grid">
    {getAllCampaign.map((campaign) => (
     <li key={campaign.id} className="campaign-card">
      <h3 className="campaign-title">{campaign.title}</h3>
      <p className="campaign-info">ID: {campaign.id}</p>
      <p className="campaign-info">Funding Goal: {campaign.fundingGoal}</p>
      <p className="campaign-info">Owner: {campaign.owner}</p>
      <p className="campaign-info">Duration: {campaign.durationTime} days</p>
      <p className="campaign-info">
       Active: {campaign.isActive ? "Yes" : "No"}
      </p>
      <p className="campaign-info">
       Funding Balance: {campaign.fundingBalance}
      </p>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default AllCampaigns;
