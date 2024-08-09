// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', { username, email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
  };

  return (
          <form className='form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Add User</button>
          </form>
   
  );
};

export default AddUser;
