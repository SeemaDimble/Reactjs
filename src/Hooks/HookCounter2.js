import React,{useState} from "react";

function HookCounter2()
{
    const initialCount=0
    const [count,setCount]=useState(initialCount)
   const incrementByFive=()=>
    {
        for(let i=0;i<5;i++)
        setCount(prevCount=>prevCount+1)

    }
    return(
        <div>
            count:{count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementByFive}>Increment By 5</button>

        </div>
    )
}

export default HookCounter2