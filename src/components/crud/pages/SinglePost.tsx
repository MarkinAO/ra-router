import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import postData from '../models';

export default function SinglePost() {
    // const [text, setText] = useState('');
    const [user, setUser] = useState<postData>();
    const {id} = useParams();

    const onChange = (e: any) => {
        if(user) {
            const newUserData = {
                ...user,
                content: e.target.value
            }
            setUser(newUserData)
        }        
    }

    const onDeletePost = () => {
        axios.delete(import.meta.env.VITE_API_URL + `/posts/${id}`)
            .catch(err => {
                console.error(err.message)
            })
    }

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + `/posts/${id}`)
            .then(res => {
                if(res.statusText === 'OK') {
                    setUser(res.data.post);                    
                }
            })
    }, [id])

    const onSendChangeMessage = () => {
        if(user?.content.length === 0) return;
        const body = {
            content: user?.content,
            userName: 'Vasya Pupkin'
        }
        axios.put(import.meta.env.VITE_API_URL + `/posts/${id}`, body)
            .catch(err => {
                console.error(err.message)
            })
    }

    return(
        <>
            {user &&
            <div className="post-container">
                <div className="post-title">
                    {user?.userName}
                    <Link className="icon-button" to={'/'}>&#10006;</Link>
                </div>
                <textarea 
                    className="post-area"
                    value={user?.content}
                    onChange={onChange}
                />
                <Link 
                    className="button"  
                    onClick={onSendChangeMessage}
                    to={'/'}>
                    Сохранить
                </Link>
                <Link 
                    className="button button__delete"  
                    onClick={onDeletePost}
                    to={'/'}>
                    Удалить
                </Link>
            </div>}
        </>        
    )
}