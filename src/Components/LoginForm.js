import axios from "axios";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

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

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            const { token } = response.data;
        
            // Save the token (usually in localStorage or a global state)
            localStorage.setItem('token', token);

            // Redirect to another page (e.g., dashboard)
            navigate('/dashboard');
        } catch (error) {
            console.error('There is some error', error);
            
        }
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
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                            required>
                        </input>
                        <input 
                           type="password" 
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                           placeholder="Password" 
                           required >
                        </input>
                        <a href="#">Forgot password</a>
                        <button type="submit">Login</button>
                        <p>Not a member?{" "}
                            <a href="#" onClick={() => setIsLogin(false)}>Sign up now</a>
                        </p>
                    </form>
                ) : (
                    <form className="form" onSubmit={handleSignupSubmit}>
                        <h2>Sign up form</h2>
                        <input type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="number" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)}></input>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="password" placeholder="Confirm Password"></input>
                        <button type="">Sign up</button>
                    </form>
                )}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default LoginForm;
