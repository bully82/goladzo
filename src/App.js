
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from "./ui-components";
import { SideBar } from "./ui-components";
import './fonts/F1.8-Regular.otf';

function App() {
  return (
    <div>
      
      <NavBar width='100%'/>
      <SideBar fontFamily='sans-serif'/>
<p>texterooony soccer soccer</p>
    </div>
  );
}

export default withAuthenticator(App,{ includegreeting:true});


