import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { beforeEach, afterEach } from "@jest/globals";
import SignUp from '../SignUp';

let signUpElement;
let signUpForm;
let signUpEmail;
let signUpPassword;
let signUpSubmit;
let signUpEmailError;
let signUpPasswordError;

beforeEach(() => {

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
test('should sign up', () => {
    fireEvent.input(signUpEmail, {target: {value: 'test@mail.com'}});
    fireEvent.input(signUpPassword, {target: {value: 'asdf3#Jkl90'}});
    
    expect(signUpEmail.value).toBe('test@mail.com'); 
    expect(signUpPassword.value).toBe('asdf3#Jkl90');
    expect(signUpSubmit.disabled).toBe(false);
});

// UT-2
test('should alert invalid email', () => {
    fireEvent.input(signUpEmail, {target: {value: 'testmail.com'}});
    fireEvent.input(signUpPassword, {target: {value: 'asdf3#Jkl90'}});
    
    expect(signUpEmailError.textContent).toBe('Email is Not Valid');
});

test('should alert invalid  password', () => {
    fireEvent.input(signUpEmail, {target: {value: 'test@mail.com'}});
    fireEvent.input(signUpPassword, {target: {value: 'asdfjkl'}});
    
    expect(signUpPasswordError.textContent).toBe('Password is Not Valid');
});
 