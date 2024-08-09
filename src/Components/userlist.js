// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div className='container'>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
