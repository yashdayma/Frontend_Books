import axios from "axios";
import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (!email || !mobile || !password || !username) {
            alert('Please fill in all fields.');
            return;
        }
        axios.post('http://localhost:5000/api/users', { email, mobile, password, username })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There is some error', error);
                setErrorMessage('Error during signup.');
            });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        axios.post('http://localhost:5000/api/users/login', { email, password })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There is some error', error);
                setErrorMessage('Error during login.');
            });
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}> Sign in </button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}> Sign up </button>
                </div>
                {isLogin ? (
                    <form className="form" onSubmit={handleLoginSubmit}>
                        <h2>Login form</h2>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <a href="#">Forgot password</a>
                        <button type="submit">Login</button>
                        <p>Not a member?{" "}
                            <a href="#" onClick={() => setIsLogin(false)}>Sign up now</a>
                        </p>
                    </form>
                ) : (
                    <form className="form" onSubmit={handleSignupSubmit}>
                        <h2>Sign up form</h2>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="number" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)}></input>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="password" placeholder="Confirm Password"></input>
                        <button type="submit">Sign up</button>
                    </form>
                )}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default LoginForm;
