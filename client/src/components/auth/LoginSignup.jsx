import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginSignup = () => {
    // State to control the current action ('active' for signup, '' for login)
    const [action, setAction] = useState('');

    // State to manage the name, email, and password inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State to manage password verification and error messages
    const [passwordVerification, setPasswordVerification] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordVerificationMessage, setPasswordVerificationMessage] = useState('');
    const [validSignup, setValidSignup] = useState(false);

    // Regex patterns for email and password validation
    const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regExPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    // Handle Login form submission
    const login = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Use Firebase authentication to sign in with email and password
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential); // Log the user credential on successful login
        }).catch((error) => {
            console.log(error); // Log any errors that occur during login
        });
    }

    // Handle Signup form submission
    const signUp = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (validSignup) {
            // Use Firebase authentication to create a new user with email and password
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log(userCredential); // Log the user credential on successful signup
            }).catch((error) => {
                console.log(error); // Log any errors that occur during signup
            });
        }
    }

    // Switch to signup view
    const signupSwitch = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setAction('active'); // Set action to 'active' to show signup form
    }

    // Switch to login view
    const loginSwitch = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setAction(''); // Reset action to show login form
    }

    // Validate email format and update error message
    useEffect(() => {
        if (!regExEmail.test(email) && email !== "") {
            setEmailErrorMessage("Email is Not Valid");
            setValidSignup(false);
        } else {
            setEmailErrorMessage("");
        }
    }, [email]);

    // Validate password verification and update error message
    useEffect(() => {
        if (passwordVerification !== password && passwordVerification !== "") {
            setPasswordVerificationMessage("Passwords do not match");
            setValidSignup(false);
        } else {
            setPasswordVerificationMessage("");
        }
    }, [passwordVerification]);

    // Validate password format and update error message
    useEffect(() => {
        if (!regExPassword.test(password) && password !== "") {
            setPasswordErrorMessage("Password is Not Valid");
            setValidSignup(false);
        } else {
            setPasswordErrorMessage("");
        }
    }, [password]);

    // Check if all signup conditions are met
    useEffect(() => {
        if (regExEmail.test(email)
            && regExPassword.test(password)
            && passwordVerification !== ""
            && passwordVerification === password
        ) {
            setValidSignup(true);
        }
    }, [email, password, passwordVerification]);

    return (
        <div className={`wrapper ${action}`}>
            {/* Login form */}
            <div className='form-box login'>
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='forgot-password'>
                        <p><a href="">Forgot password?</a></p>
                    </div>

                    <button type="submit">Login</button>

                    <div className='signup-option'>
                        <button className='sign-up' type="button" onClick={signupSwitch} data-testid='signup-switch'>Sign Up</button>
                    </div>
                </form>
            </div>

            {/* Signup form */}
            <div className='form-box signup' data-testid='signup-el'>
                <form onSubmit={signUp} data-testid='signup-form'>
                    <h1>Signup</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} data-testid='signup-name' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} data-testid='signup-email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} data-testid='signup-password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Re-enter password' value={passwordVerification} onChange={(e) => setPasswordVerification(e.target.value)} data-testid='signup-password-verification' required />
                        <FaLock className='icon' />
                    </div>

                    <button type="submit" data-testid='signup-submit' disabled={!validSignup} >Sign Up</button>

                    <div className='cancel-option'>
                        <button className='cancel' type="button" onClick={loginSwitch}>Cancel</button>
                    </div>

                    <div className='temporary-outputs'>
                        <p data-testid='signup-email-error'>{emailErrorMessage}</p>
                        <p data-testid='signup-password-error'>{passwordErrorMessage}</p>
                        <p data-testid='signup-password-verification-message'>{passwordVerificationMessage}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;