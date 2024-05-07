import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import authService from '../Services/auth';
const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const user = {
            username,
            name,
            email,
            password
        }
        console.log(user);
        authService.signup(user);
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/signin')
    }
    return (
        <div className='signup'>
            <div className='signup-forms'>
                <h3>Register</h3>
                <form onSubmit={handleSignUp}>
                    <div>
                        <input type='text' name='username' placeholder='Enter your username'
                        value={username} onChange={(e) => setUsername(e.target.value)} required="" />
                    </div>
                    <div>
                        <input type='text' name='name' placeholder='Enter your Name'
                        value={name} onChange={(e) => setName(e.target.value)} required="" />
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Enter your email'
                        value={email} onChange={(e) => setEmail(e.target.value)} required="" />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Enter your password'
                        value={password} onChange={(e) => setPassword(e.target.value)} required="" />
                    </div>
                    <div>
                        <button type='submit' className='submit'>Register</button>
                    </div>
                </form>
                <p>Already have an account? <NavLink to="/signin">Sign in</NavLink></p>
            </div>
        </div>
    );
};

export default Signup;