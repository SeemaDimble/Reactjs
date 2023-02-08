import React,{useContext, userContext} from "react";
import ComponentFUserContext from "./ComponentFUserContext";
import {UserContext,ChannelContext} from '../App'

function ComponentEUserContext()
{
   const user= useContext(UserContext)
   const userName= useContext(ChannelContext)
    console.log('In E')
    return(
        <div>
            {user}-{userName}
            {/* <ComponentFUserContext></ComponentFUserContext> */}
        </div>
    )
}
export default ComponentEUserContext
