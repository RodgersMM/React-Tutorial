import React from 'react'
import {useState} from 'react'

function CountClicks() {

  const [count, setCount ] = useState(0)

  return (
    <div>
      <button onClick = {()=> setCount ( count+1 ) }> Click </button>
      <p>Number of Clicks: {count}</p>
      
     </div>
  )
}

export default CountClicks