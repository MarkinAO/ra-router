import postData from "../models";
import { Link } from "react-router-dom";

interface IPost {
    post: postData
}

export default function Post({post}: IPost) {
    const {userName, content, id} = post;
    return(
        <div className="post-container">
            <div className="post-title">
                {userName}
                <Link 
                    className="icon-button" 
                    to={`/posts/${id}`}>
                    &#9998;
                </Link>
            </div>
            <div className="post-content">{content}</div>
        </div>
    )
}