import React ,{Component} from "react";

class Form extends Component
{
    constructor()
    {
        super()
        this.state={
            username:'',
            Comment:'',
            topic:''
        }

    }
    handelUserNameChange=(event)=>{
        console.log(event.target.value);
        this.setState({username:event.target.value
        })
    }
    handelCommentChange=(event)=>{
        console.log(event.target.value);
        this.setState({Comment:event.target.value})
    }
    handelTopicChange=event=>{
        this.setState({
            topic:event.target.value
        })
    }
        handelSubmit=event=>
        {
          alert(`${this.state.username} ${this.state.Comment}
           ${this.state.topic}`)
           event.preventDefault()
        }
    
render()
{
    return(
        <form>
            <div>
               <label>User Name:</label>
               <input type='text' onChange={this.handelUserNameChange} 
               value={this.state.username}></input>
           </div> 
           <div>
            <label>Comment:</label>
            <textarea value={this.state.Comment}
             OnChange={this.handelCommentChange}></textarea>
           </div>
           <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handelTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
           </div>
           <div>
            <button onClick={this.handelSubmit}>Submit</button>
           </div>
        </form>
    )
}
}

export default Form