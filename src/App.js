import AllCampaigns from "./component/AllCampaigns";
import CampaignNo from "./component/CampaignNo";
import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import "./App.css";

function App() {
 return (
  <div className="App">
   <Header />
   <main className="mt-10">
    <CreateCampaign />
   </main>
   <CampaignNo />
   <AllCampaigns />
  </div>
 );
}

export default App;
