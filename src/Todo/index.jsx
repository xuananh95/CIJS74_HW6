import React from 'react'
import './styles.css';
import { useState, useEffect } from "react";


const Todo = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        console.log('tasks re render');
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dataRes = await data.json();
        setTodo(dataRes);
    }
    return (
        <div className="todo-container container">
            {todo.map((d, index) => (
                <div className="todo" key={index}>
                    <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginBottom: '5px' }}>Task {d.id} </h1>
                    <p><span style={{ fontWeight: 'bold' }}>Title:</span> {d.title}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Status:</span> {d.completed ? 'Done' : 'Not Finished'}</p>
                </div>
            ))}

        </div>
    )
}

export default Todo