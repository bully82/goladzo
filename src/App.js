
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar } from "./ui-components";
import { SideBar } from "./ui-components";
import './fonts/F1.8-Regular.otf';
import ActionCard from './ui-components/ActionCard';
function App() {
  return (
    <div>
          <NavBar/>
      <ActionCard position='centre'/>
      <p>texterooony soccer soccer</p>
      <SideBar/>
    </div>
  );
}

export default withAuthenticator(App,{ includegreeting:true});

