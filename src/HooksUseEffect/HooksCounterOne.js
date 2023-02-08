import React,{useEffect, useState} from "react";

function HooksCounterOne()
{
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")
    useEffect(()=>{
        console.log("UseEffect updating the documents")
        document.title=`Document Clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" value={name} 
            onChange={e=>setName(e.target.value)}></input>
            <button onClick={()=>setCount(count+1)}>Click{count}</button>
        </div>

    )
}

export default HooksCounterOne