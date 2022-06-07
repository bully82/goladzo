
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      App
    </div>
  );
}

export default withAuthenticator(App,{ includegreeting:true});


