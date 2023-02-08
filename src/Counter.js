import React,{Component} from 'react';

class Counter extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    increment()
    {
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count)
        this.setState((prevState)=>({
            count:prevState.count+5
        }),console.log(this.state.count))
        console.log("Call Back"+this.state.count)
    }
    incrementFive()
    {
        this.increment()
    }

    render()
    {
        return(
            <div>
                <div>Count -{this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }

}

export default Counter
