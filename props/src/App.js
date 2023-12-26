
import './App.css';
import BasicProps from './components/BasicProps';
import ChildrenProp from './components/ChildrenProp';

const App = () => {
  return (
    <div>
      <div className="border   ">
        {/*Children Props*/} 
     <h2>Children Props Usage</h2>
  
      <ChildrenProp className="">
         <p>I am a Children Prop using <b><i>props.children </i></b>property</p>
      </ChildrenProp>


      <h2>Basic Props Usage</h2>
          <BasicProps name="Tonny" age="3" /> 
          <BasicProps name="Ann" age="1.4" /> 
          <BasicProps name="Linah" age="28" /> 
    </div>
    </div>
  );
}

export default App;
