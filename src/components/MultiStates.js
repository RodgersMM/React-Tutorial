//This hook will Use Previous state rather than initial
//Will Have previous count, count, next count buttons

import React, {useState} from "react";


//Calling the Hook (at Top Level)
function MultiStates() {
    const initialCount = 0
    const [count, setCount] = useState (initialCount)


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

         
    </div>
) 
    
}

export default MultiStates