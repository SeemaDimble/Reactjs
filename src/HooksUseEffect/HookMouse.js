import React,{useEffect,useState} from "react";

function HookMouse()
{
    const [x,setX]=useState(0)
    const [Y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)

    }
    useEffect(()=>{ 
    console.log("useEfect called");
    window.addEventListener('mousemove',logMousePosition)

    return()=>{
        console.log("Componen unmounting code")
        window.removeEventListener('mousemove',logMousePosition)
    }
    },[])

    return( 
        <div>
            Hooks x-{x} Y-{Y}
        </div>

    )

}
export default HookMouse