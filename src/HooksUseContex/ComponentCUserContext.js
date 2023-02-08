import React from "react";
import ComponentEUserContext from "./ComponentEUserContext";

function ComponentCUserContext()
{
    console.log('In C')
    return(
        <div>
            <ComponentEUserContext></ComponentEUserContext>
        
        </div>
    )
}
export default ComponentCUserContext
