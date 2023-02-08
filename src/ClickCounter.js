import React,{Component} from "react";
import UpdatedComponent  from "./WithCounter";

class ClickCounter extends Component
{
   
    render()
    {
        const{count,incrementcount}=this.props
        // console.log(count )
        // console.log(incrementcount)
        return(
            <div>
                <button onClick={incrementcount}>{this.props.name} 
                 Clicked {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCounter,7)