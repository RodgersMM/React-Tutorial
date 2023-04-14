//This hook will Use Previous state rather than initial
//Will Have previous count, count, next count buttons

import React, {useState} from "react";


//Calling the Hook (at Top Level)
function MultiCounter() {
    const initialCount = 0
    const [count, setCount] = useState (initialCount)

    const incrementTen = () => {
        for(let i=0; i<10; i++){
            //Increase everytime by 1
            //setCount (count + 1). This will increase by 1 not 10
            setCount(prevCount => prevCount + 1)
        }

    }

//Adding the JSX
return (
    <div>
        count: {count}

        {/*Below button will set the count to o. Recall initialcount =0 */}
        <button onClick={()=>setCount(initialCount)}> Reset</button>

        { /*Below button will increase the count by 1*/ }
        <button onClick={()=>setCount(count + 1)}> Increment {}</button>

        { /*Below button will decrease the count by 1 */ }
        <button onClick={()=>setCount(count - 1 )}>  Decrement {}</button>

        {/*Button to increment by 5 */}
        <button onClick={()=>setCount(count + 5)} >Increment by 5 </button>

         {/*Button to increment by ten*/}
         <button onClick={incrementTen} >Increment by 10  </button>

    </div>
) 
    
}

export default MultiCounter