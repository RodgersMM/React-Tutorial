import { useState } from 'react';
import React from 'react';

function SimpleCount () {
  const [count, setCount] = useState(10)
  return (

    <div className="App">
      <button onClick={setCount(count + 1)}>Click Me</button>
      <p>Clicked {count} Times</p>
     

    </div>
  );
}

export default SimpleCount
