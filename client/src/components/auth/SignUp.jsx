import React, { useState } from 'react';
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PasswordChecklist from "react-password-checklist";
//used this library: https://www.npmjs.com/package/react-password-checklist for the password checklist. We can change this if we dont like it.

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageEmail,setEmailMessage] = useState('');
    

    //Changes prevent sign up if input doesnt match regex
    // Password regex: 
    // At least one lowercase alphabet i.e. [a-z]
    // At least one uppercase alphabet i.e. [A-Z]
    // At least one Numeric digit i.e. [0-9]
    // At least one special character
    // Also, the total length must be in the range [8-16]
    const signUp = (e) => {
        e.preventDefault();
        const regExEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const regExPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

        if(regExEmail.test(email) && regExPassword.test(password)){
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })
            setEmailMessage("");
        } else if (!regExEmail.test(email) && email !== ""){
            setEmailMessage("Email is Not Valid"); 
        } else if (!regExPassword.test(password) && password !== ""){
        }
    }


    return (
        <div className='sign-in-container' data-testid='signup-el'>
            <form onSubmit={signUp} data-testid='signup-form'>
                <h1>Create Account</h1>
                {messageEmail}
                
                <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Sign up</button>
                <PasswordChecklist
				rules={["minLength", "maxLength","specialChar","number","capital"]}
				minLength={8}
                maxLength={16}
				value={password}
				onChange={(isValid) => {}}
                /> 
            </form>
        </div>
    )
}

export default SignUp;