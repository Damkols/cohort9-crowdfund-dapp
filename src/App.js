import CampaignNo from "./component/CampaignNo";
import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";

function App() {
 return (
  <div className="App">
   <Header />
   <main className="mt-10">
    <CreateCampaign />
   </main>
   <CampaignNo />
  </div>
 );
}

export default App;
