// src/App.js
import React from 'react';
import AddBook from './Components/AddBook';
import AddUser from './Components/AddUser';
import BookList from './Components/BookList';
import UserList from './Components/userlist';

function App() {
  return (
    <div className="App">
      <h1>Full Stack App</h1>
     
      <UserList/>
      <h1>Add User List</h1>
   <AddBook/>
      <h1>Add Book List </h1>
   <AddUser/>
     
   <BookList/>
    </div>
  );
}

export default App;
