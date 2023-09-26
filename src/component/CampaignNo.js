import React from "react";
import useCampaignNo from "../hooks/useCampaignNo";

const CampaignNo = () => {
 const campaignNo = useCampaignNo();

 return (
  <div className="flex gap-2 py-20 justify-center items-center font-bold">
   <h2 className="inline-flex justify-center rounded-md bg-red-400 px-4 py-2 text-xl font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    Total Campaigns: {campaignNo}
   </h2>
  </div>
 );
};

export default CampaignNo;
