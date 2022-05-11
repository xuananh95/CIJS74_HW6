import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css'
// C, https://jsonplaceholder.typicode.com/users

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        console.log('tasks re render');
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataRes = await data.json();
        setUser(dataRes);
    }
    return (
        <div className="todo-container container">
            {user.map((d, index) => (
                <div className="item" key={index}>
                    <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginBottom: '5px', minHeight: '100px' }}>{d.name}</h1>
                    <p><em><span style={{ fontWeight: 'bold' }}>Username:</span> {d.username}</em></p>
                    <p><span style={{ fontWeight: 'bold' }}>Email:</span> {d.email}</p>

                    <p><em><span style={{ fontWeight: 'bold' }}>Address:</span></em></p>
                    <div className="address-item">
                        <p><em>Street:</em> {d.address.street}</p>
                        <p><em>Suite:</em> {d.address.suite}</p>
                        <p><em>City:</em> {d.address.city}</p>
                        <p><em>Zipcode:</em> {d.address.zipcode}</p>
                        <p><em>Location:</em> &#123;{d.address.geo.lat}:{d.address.geo.lng}&#125;</p>
                    </div>



                </div>
            ))}

        </div>
    )
}

export default User