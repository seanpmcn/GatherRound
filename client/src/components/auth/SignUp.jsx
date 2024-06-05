import React, { useState } from 'react';
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='sign-in-container' data-testid='signup-el'>
            <form onSubmit={signUp} data-testid='signup-form'>
                <h1>Create Account</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} data-testid='signup-email'></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} data-testid='signup-password'></input>
                <button type="submit" data-testid='signup-submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp;