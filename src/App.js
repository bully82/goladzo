
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { ItemCard, SideBar } from "./ui-components";
import './fonts/F1.8-Regular.otf';
function App() {
  return (
    <div>
      <ItemCard></ItemCard>
      <p>texterooony soccer soccer</p>
      <SideBar/>
    </div>
  );
}
export default withAuthenticator(App,{ includegreeting:true});