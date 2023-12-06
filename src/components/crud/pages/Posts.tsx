import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Post from "../components/Post";
import postData from "../models";

export default function Posts() {
    const [posts, setPosts] = useState<postData[]>([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/posts')
            .then(res => {                
                if(res.statusText === 'OK') {
                    setPosts(res.data)
                }                
            })
            .catch(error => console.error(error.message))
    }, [posts])
    
    return(
        <>
            <div className="panel">
                <Link className="button" to={"/new"}>Создать пост</Link>
            </div>            
            {posts.map(post => {
                return(
                    <Post post={post} key={post.id} />
                )
            })}
        </>
    )
}