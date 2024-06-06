import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach } from "@jest/globals";
import SignUp from '../SignUp';
import { act } from 'react';

let user;
let signUpElement;
let signUpForm;
let signUpEmail;
let signUpPassword;
let signUpSubmit;
let signUpEmailError;
let signUpPasswordError;

beforeEach(() => {

    user = userEvent.setup();
    render(<SignUp/>);
    signUpElement = screen.getByTestId('signup-el');
    signUpForm = screen.getByTestId('signup-form');
    signUpEmail = screen.getByTestId('signup-email');
    signUpPassword = screen.getByTestId('signup-password');
    signUpSubmit = screen.getByTestId('signup-submit');
    signUpEmailError = screen.getByTestId('signup-email-error');
    signUpPasswordError = screen.getByTestId('signup-password-error')
});

afterEach(() => {
    cleanup()
});

test('should contain sign up element', () => {
    expect(signUpElement).toBeInTheDocument();
});

// UT-1
test('should sign up', async () => {
    const user = userEvent.setup();

    await user.type(signUpEmail, 'test@mail.com');
    await user.type(signUpPassword, 'asdf3#Jkl90');
    
    expect(signUpEmail.value).toBe('test@mail.com'); 
    expect(signUpPassword.value).toBe('asdf3#Jkl90');
    expect(signUpSubmit.disabled).toBe(false);
});

// // UT-2
test('should alert invalid email', async () => {    
    await user.type(signUpEmail, 'testmail.com');
    await user.type(signUpPassword, 'asdf3#Jkl90');

    expect(signUpEmailError.textContent).toBe('Email is Not Valid');
});

test('should alert invalid  password', async () => {
    await user.type(signUpEmail, 'test@mail.com');
    await  user.type(signUpPassword, 'asdfjkl');
    
    expect(signUpPasswordError.textContent).toBe('Password is Not Valid');
});
 