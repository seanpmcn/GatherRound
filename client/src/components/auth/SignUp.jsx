import React, { useState } from 'react';
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [validSignup, setValidSignup] = useState(false);

    //Changes prevent sign up if input doesnt match regex
    // Password regex: 
    // At least one lowercase alphabet i.e. [a-z]
    // At least one uppercase alphabet i.e. [A-Z]
    // At least one Numeric digit i.e. [0-9]
    // At least one special character
    // Also, the total length must be in the range [8-16]
    const signUp = (e) => {
        e.preventDefault();

        if(validSignup){
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    const checkCredentials = () => {
        const regExEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regExPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

        if (!regExEmail.test(email) && email !== ""){
            setEmailErrorMessage("Email is Not Valid"); 
            setValidSignup(false);
        }else{
            setEmailErrorMessage("");
        }

        if (!regExPassword.test(password) && password !== ""){
            setPasswordErrorMessage("Password is Not Valid");
            setValidSignup(false);
        }else{
            setPasswordErrorMessage("");
        }
        
        if(regExEmail.test(email) && regExPassword.test(password)){
            setValidSignup(true);
        }
    }

    return (
        <div className='sign-in-container' data-testid='signup-el'>
            <form onSubmit={signUp} data-testid='signup-form'>
                <h1>Create Account</h1>
                
                <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value); checkCredentials()}} data-testid='signup-email'></input>
                <input id="password" type="password" placeholder="Enter your password" value={password} onChange ={(e) => {setPassword(e.target.value); checkCredentials()}} data-testid='signup-password'></input>
                <button type="submit" data-testid='signup-submit' disabled={!validSignup}>Sign up</button>
                <p data-testid='signup-email-error'>{emailErrorMessage}</p>
                <p data-testid='signup-password-error'>{passwordErrorMessage}</p>
            </form>
        </div>
    )
}

export default SignUp;