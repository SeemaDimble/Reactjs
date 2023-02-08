import React,{Component} from "react";
import axios from 'axios'

class PostList extends Component
{ 
    constructor(props){
        super()
        this.state={
            post:[],
            errorMsg:''
        } 
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            this.setState({post:Response.data})
        }) 
        .catch(error=>{console.log(error)
            this.setState({errorMsg:'Error retriving Data'})
        })
    }
    render()
    {
        const{post,errorMsg}=this.state
        return(
            <div>
                List of Post
                {
                    post.length?
                    post.map(post=><div key={post.id}>{post.title}</div>):
                    null
                }
                {errorMsg?<div>{errorMsg}</div>:null}
            </div>
        )
    }

}

export default PostList