import React, {useState} from 'react'

function ArrayStates() {
    //Declaring our variables
    const [items, setItems] = useState([])

    //Adding addItem function to use to add Numbers
    const addItem = () => {
        setItems([...items, {
            id: items.length,  //id is the number of the 
            value: Math.floor(Math.random() * 10)+ 1 //Display Random number between 0 & 10
        }])
    }

//Rendering JSX
  return (
    <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
           {items.map(item =>(
             <li key={item.id}>{item.value}</li>
        ))}
        </ul>

    </div>
  )
}

export default ArrayStates