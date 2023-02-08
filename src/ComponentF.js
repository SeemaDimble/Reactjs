import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component
{
    render()
    {
        //console.log(username)
        return(
            <UserConsumer>
                {
                    
                   (username) =>{
                    return<div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF