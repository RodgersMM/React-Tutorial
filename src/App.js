
import './App.css';

import UsePrevTwenty from './components/UsePrevTwenty';
import BasicCounter from './components/BasicCounter';
import MultiCounter from './components/MultiCounter';
import AclassCounter from './components/AclassCounter';

function App() {
  return (
    <div className="App">
      {/* */}
      <AclassCounter /> 
      <BasicCounter />
      <MultiCounter />      
      <UsePrevTwenty />

    </div>
  );
}

export default App;
