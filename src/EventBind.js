import React,{Component} from 'react'

class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:"Hello"
        }
        this.ClickHandler=this.ClickHandler.bind(this)
    }
    ClickHandler()
    {
        this.setState(
            {
            message:'Goodbye!'
            }
        )

    }
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )

    }
    
}
export default EventBind