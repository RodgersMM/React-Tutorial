import React from 'react'
import { useState } from 'react'

function MultipleStates() {

    function NameList(){
        const [list, setList] = useState(['John', 'Bob', 'Ken'])
        const [name, setName] = useState ("")
        return(
            <div>
                <ul>
                    {list.map((name)=>(
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
               />
        
            </div>
        )
    }

    function Counter() {
        const [count, setCount] =useState(10)
        function addOne(){
            Counter(count + 1)
        }
    }

  return (
    <div>
        <button onClick={addOne}> Count = {count} </button>
        <button onClick={Counter}> Counter </button>


    </div>
  )
}

export default MultipleStates