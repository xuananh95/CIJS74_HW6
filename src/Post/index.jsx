import React from 'react';
import { useState, useEffect } from 'react';

// B, https://jsonplaceholder.typicode.com/posts

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        console.log('tasks re render');
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataRes = await data.json();
        setPost(dataRes);
    }
    return (
        <div className="todo-container container">
            {post.map((d, index) => (
                <div className="item" key={index}>
                    <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginBottom: '5px' }}>Post {d.id} </h1>
                    <p><em><span style={{ fontWeight: 'bold' }}>Title:</span> {d.title}</em></p>
                    <p style={{ marginTop: "20px" }}>{d.body}</p>

                </div>
            ))}

        </div>
    )
}

export default Post