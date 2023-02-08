import React from 'react'

// const Greet=(props)=>
// {
//     console.log(props)
//  return(
//     <div>
//      <h1>Hello {props.name} having age {props.age}</h1>
//      <h2>{props.children}</h2> 

//      </div>
//  )
// }

const Greet=(props)=>
{
    const{name,age}=props
    console.log(props)
 return(
    <div>
     <h1>Hello {name} having age {age}</h1>
     <h2>{props.children}</h2> 
     <h2>Changes made by seema</h2>
     </div>
 )
}
/////**Desructing props and state**////
// const Greet=({name,age})=>
// {
//     console.log(props)
//  return(
//     <div>
//      <h1>Hello {name} having age {age}</h1>
//      <h2>{props.children}</h2> 
//      </div>
//  )
// }


export default Greet