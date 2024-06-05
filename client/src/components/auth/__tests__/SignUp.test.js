import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { beforeEach, afterEach } from "@jest/globals";
import SignUp from '../SignUp';

let signUpElement;
let signUpForm;
let signUpEmail;
let signUpPassword;
let signUpSubmit;

beforeEach(() => {

    render(<SignUp/>);
    signUpElement = screen.getByTestId('signup-el');
    signUpForm = screen.getByTestId('signup-form');
    signUpEmail = screen.getByTestId('signup-email');
    signUpPassword = screen.getByTestId('signup-password');
    signUpSubmit = screen.getByTestId('signup-submit')
});

afterEach(() => {
    cleanup()
});

test('should contain sign up element', () => {
    expect(signUpElement).toBeInTheDocument();
});

test('should set email', () => {

    fireEvent.change(signUpEmail, {target: {value: 'test@mail.com'}})

    
    expect(signUpEmail).toHaveValue('test@mail.com');


});
 