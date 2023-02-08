import React,{Component} from "react";

class UserGreeting extends Component
{
    constructor()
    {
    super()
    this.state={
        isLoggedIn:false
      }
    }

    render()
    {

        return this.state.isLoggedIn? <div>Welcome Seema</div>:<div>Welcome Guest</div>
        // if(this.state.isLoggedIn)
        // {
        // return(
        //     <div>Welcome Seema</div>
        // )
        // }
        // else
        // {
        // return(
        //     <div>Welcome Guest</div>
        // )
        // }
    }
}

export default UserGreeting