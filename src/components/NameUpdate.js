
import{ useState} from 'react'
import React from 'react'

function NameUpdate() {

const firstName = "Hollo"
const [ name,setName] = useState(firstName)

const updateName = () => {
    setName ("Kungu")
    console.log(setName)
}

  return (
    <>
        <button onClick={()=> setName("Koloo")}>Niclick</button>
        <p> Age {name}</p>
        <p> Current Name: {updateName}</p>
    </>
  )
}

export default NameUpdate


