import React, { useState } from 'react';

function StringState() {
  const [text, setText] = useState('Hello, useState!');
  
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText('Updated text')}>Update Text</button>
    </div>
  );
}

export default StringState
