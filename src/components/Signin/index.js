import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './signin.css';
import authService from '../Services/auth';
import { useDispatch } from 'react-redux';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignin = async (e) => {
        e.preventDefault();
        const user = await authService.signin({
            email: email,
            password: password
        })
        console.log(user);

        dispatch({
            type: 'SET_USER',
            payload: user
        })
        
        //clear the form
        setEmail('');
        setPassword('');
        navigate("/dashboard")
    }
    return (
        <div className='signin'>
            <div className='signin-forms'>
                <h3>Login</h3>
                <form onSubmit={handleSignin}>
                    <div>
                        <input type='email' name='email' placeholder='Enter your email' 
                        value= {email} onChange={(e) => setEmail(e.target.value)} required="" />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Enter your password'
                        value= {password} onChange={(e) => setPassword(e.target.value)} required="" />
                    </div>
                    <button type='submit' className='submit'>Login</button>
                </form>
                <p>Don't have an account? <NavLink to="/signup">Register </NavLink></p>
            </div>
        </div>
    );
};

export default Signin;