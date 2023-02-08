import React,{useEffect,useState} from "react";
import axios from "axios";

function DataFectching()
{
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idbtlClick,setIdFrombtnClick]=useState(1)

    const handelClick=()=>
    {
        setIdFrombtnClick(id)
    }
    useEffect(()=>
    {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idbtlClick}`)
        .then(res=>{console.log(res)
        setPost(res.data)})
        .catch(err=>{console.log(err)
        })
    },[idbtlClick])
    return(
        <div>
            <input type='text' value={id} 
            onChange={e=>setId(e.target.value)}></input>
            <button type='button' onClick={handelClick}>Fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                posts.map(post=> <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>

    )

}

export default DataFectching
