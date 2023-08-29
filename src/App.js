
import './App.css';


import AclassCounter from './components/AclassCounter';
import MultiStates from './components/MultiStates';
import SingleState from './components/SingleState';
import PrevState from './components/PrevState';
import StateObject from './components/StateObject';
import ArrayStates from './components/ArrayStates';
import NameUpdate from './components/NameUpdate';
import CountClicks from './components/CountClicks';
import StringState from './components/StringState';

function App() {
  return (
    <div className="App">

      <StringState />

      {/*
      <CountClicks />
      <NameUpdate />
      <AclassCounter /> 
      <SingleState />
      <MultiStates />      
      <PrevState />
      <StateObject />
      <ArrayStates /> */}
    </div>
  );
}

export default App;
