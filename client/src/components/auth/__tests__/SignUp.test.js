import { render, screen, cleanup } from "@testing-library/react";
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
    //TODO: Write test
    expect(true).toBe(true);
});