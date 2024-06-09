import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const LoginSignup = () => {

    const[action, setAction] = useState('');

    const signupSwitch = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setAction('active');
    }

    const loginSwitch = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setAction('');
    }


    return (
        <div className={`wrapper ${action}`}>
            <div className='form-box login'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Name' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className='forgot-password'>
                        <p><a href="">Forgot password?</a></p>
                    </div>

                    <button type="submit">Login</button>

                    <div className='signup-option'>
                        <button className='sign-up' type="button" onClick={signupSwitch}>Sign Up</button>
                    </div>
                </form>
            </div>

            <div className='form-box signup'>
                <form action="">
                    <h1>Signup</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Name' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>

                    <button type="submit">Sign Up</button>

                    <div className='signup-option'>
                        <button className='cancel' type="button" onClick={loginSwitch}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;