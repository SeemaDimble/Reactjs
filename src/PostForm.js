import React,{Component} from "react"
import axios from 'axios'

class PostForm extends Component
{
    constructor()
    {
        super()
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response=>{console.log(Response)})
        .catch(console.error())
    }
    render()
    {
        const{userId,title,body}=this.state
        return(
            
                <div>
                    {/* <form onSubmit={this.submitHandler}> */}
                    <div>
                        <input type='text' 
                               name="userId" 
                               value={userId}>
                               onChange={this.changeHandler}
                               </input>
                    </div>
                    <div>
                        <input type='text' 
                               name="title" 
                               value={title}></input>
                               onChange={this.changeHandler}
                    </div>
                    <div>
                        <input type='text'
                                name="body" 
                                value={body}>
                                onChange={this.changeHandler}    
                                </input>
                    </div>
                    {/* </form> */}
                </div>
            
        )

    }
}

export default PostForm