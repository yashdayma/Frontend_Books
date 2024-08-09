
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import DarkModeSwitcher from './Darkmodeswitcher';

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className='flex p-2 '>
            <div className='font-bold text-2xl p-2'>Book Shop App</div>
             <div className='self-center w-8 h-8 ml-2 mr-1' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 
                    12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7
                    40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144
                    144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
             </div>
             <input
                className="search self-center h-8 w-1/4 border-none focus:outline-none placeholder-gray-800"
                type="text"
                placeholder="Search Here"
             />
               <div className='flex justify-end ml-48 w-2/5 h-10 '>
                     <DarkModeSwitcher/>
                       
                         <div className=' notification bg-gray-200 self-center p-2 border-2 w-8 h-8 rounded-[80%] mr-4'>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                         <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 
                         64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9
                         17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 
                         21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8
                         384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 
                         0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 
                         112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 
                         45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                         </svg>
                         </div>
                         <div className='message bg-gray-200 self-center p-2 border-2 w-8 h-8 rounded-[80%] mr-4'>
                        
                         </div>
                         <div className='username self-center p-2 border-2 w-28 h-8 mr-4'>
                         
                         </div>
                         <div className='userphoto self-center p-2 border-2 w-12 h-12 rounded-[80%]'>
                        
                         </div>
                         <div className='userphoto self-center p-2  w-10 rounded-[80%]'>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 
                         241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 
                         24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>
                         </div>
                         </div>
            {isAuthenticated && <button onClick={logout}>Logout</button>}
            
        </nav>
    );
};

export default Header;
