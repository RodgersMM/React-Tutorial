
import './App.css';


import AclassCounter from './components/AclassCounter';
import MultiStates from './components/MultiStates';
import SingleState from './components/SingleState';
import PrevState from './components/PrevState';
import StateObject from './components/StateObject';

function App() {
  return (
    <div className="App">
      {/* */}
      <AclassCounter /> 
      <SingleState />
      <MultiStates />      
      <PrevState />
      <StateObject />

    

    </div>
  );
}

export default App;
