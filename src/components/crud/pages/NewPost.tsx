import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewPost() {
    const [text, setText] = useState('');

    const onChange = (e: any) => {
        setText(e.target.value)
    }

    const onSendMessage = () => {
        if(text.length === 0) return;
        const body = {
            content: text,
            userName: 'Vasya Pupkin'
        }
        axios.post(import.meta.env.VITE_API_URL + '/posts', body)
            .catch(err => {
                console.error(err.message)
            })
    }

    return(
        <div className="post-container">
            <div className="post-title">
                Vasya Pupkin
                <Link className="icon-button" to={'/'}>&#10006;</Link>
            </div>
            <textarea 
                className="post-area"
                value={text}
                onChange={onChange}
            />
            <Link 
                className="button"  
                onClick={onSendMessage}
                to={'/'}>
                Опубликовать
            </Link>
        </div>
    )
}