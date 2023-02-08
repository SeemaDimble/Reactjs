import React, {Component,PureComponent } from "react";

class PureComp extends PureComponent
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

export default PureComp