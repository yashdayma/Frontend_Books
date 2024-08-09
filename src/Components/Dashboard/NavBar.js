// // src/components/Navbar.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { logout } from './LogOut';


// const Navbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout()
//         navigate('/login');
//     };

//     return (
//         <nav>
//             <h1>Book shop App</h1>
//             <button onClick={handleLogout}>Logout</button>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className='navbar flex bg-green-200'>
            <h1>Book Shop App</h1>
            <div className='flex'>
           <div className='flex w-4 h-4'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 
            12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7
             40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144
              144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg></div>
            <input className='search' 
            type=''
            placeholder='Search Here'/>
            </div>
            
            {isAuthenticated && <button onClick={logout}>Logout</button>}
            
        </nav>
    );
};

export default Navbar;


