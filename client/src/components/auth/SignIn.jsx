import React, { useState } from 'react'
import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

// https://www.youtube.com/watch?v=Vv_Oi7zPPTw

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log In To Your Account</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default SignIn