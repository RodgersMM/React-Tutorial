
import './App.css';
import Children from './components/ChildrenProp';
import ChildrenProp from './components/ChildrenProp';

function App() {
  return (
    <div className="App">

     {/*Children Props*/} 
     <h2>Children Props Usage</h2>
     <ChildrenProp>
        <p>I am a Children Prop</p>

     </ChildrenProp>



    </div>
  );
}

export default App;
