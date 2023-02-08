import React, { Component } from "react";

class RegComp extends Component
{
    render()
    {
        return(
            <div>This is Regular Component
                {this.props.name}
            </div>
        )
    }
}

export default RegComp