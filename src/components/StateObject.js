import React from 'react'
import { useState } from 'react'

function StateObject() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    //Initial value is an object initialized to empty values
  return (
    <form>
        {/* We want two variables one for firstName and another for lastName*/}
        
        
        {/* Define input fields* 
        e - Means an event when changes to perform */}
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
        

         {/* Get input fields values*/}

            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
          
            
        </form>
  )
}

export default StateObject