import React,{useState} from "react";
function  HooksCounter4()
{
    const [items,setItems]=useState([])
    const addItems=()=>
    {
        setItems([...items,{id:items.length,
            values:Math.floor(Math.random()*10)+1}])
    }
    return(
        <div>
            <button onClick={addItems}>Add a Number</button>
            <ul>
                {items.map(items=>(
                    <li key={items.id}>{items.values}</li>))}
            </ul>
        </div>
    )
}

export default HooksCounter4