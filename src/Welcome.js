import React,{Component} from "react";

class Welcome extends Component{
    render()
    {
        return <h1>I am  {this.props.name} 
         my color is {this.props.color}</h1>    
    }
}

export default Welcome