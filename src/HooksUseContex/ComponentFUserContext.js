import React from "react";
import {UserContext} from '../App'

function ComponentFUserContext()
{
    console.log('In F')
    return(
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return<div>User Context Value {user}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )

}
export default ComponentFUserContext
