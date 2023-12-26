
import './App.css';
import Children from './components/ChildrenProp';
import ChildrenProp from './components/ChildrenProp';

function App() {
  return (
    <div className="App">

     {/*Children Props*/} 
     <h2>Children Props Usage</h2>
     <ChildrenProp className="children-props">
        <p>I am a Children Prop using <b><i>props.children </i></b>property</p>

     </ChildrenProp>



    </div>
  );
}

export default App;
