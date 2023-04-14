import React, {useState} from "react";


function UsePrevTwenty () {
    //const initialCount = 0
    const [count, setCount] = useState(0)

    const incrementTwenty = () => {
        for(let i=0; i<20; i++){
            //Increase everytime by 1
            //setCount (count + 1). This will increase by 1 not 10
            setCount(prevCount => prevCount + 1)
        }
    }
    

    return(
        <div>
            count: {count}
            <button onClick={incrementTwenty}>Increment by 20</button>
        </div>
    )
}

export default UsePrevTwenty