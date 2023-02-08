import React from "react";

const UpdatedComponent=(OriginalComponent,incCount)=>{
class NewComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    incrementcount=()=>
    {
       this.setState(prevState=>{
        return {count:prevState.count+incCount

       }}) 
    }
    render(){
    
    return <OriginalComponent count={this.state.count}
    incrementcount={this.incrementcount} {...this.props}/>
   }
}
return NewComponent
}
export default UpdatedComponent
