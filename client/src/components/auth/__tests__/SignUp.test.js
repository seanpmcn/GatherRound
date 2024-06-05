import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import { beforeEach, afterEach } from "@jest/globals";
import SignUp from '../SignUp';


let user;
let signUpElement;
let signUpForm;
let signUpEmail;
let signUpPassword;
let signUpSubmit;

beforeEach(() => {
    user = userEvent.setup();
    const handleEvents = jest.fn();
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
    
    // user.dblClick(signUpEmail);
    // user.keyboard('test@mail.com');
    // fireEvent.change(signUpEmail, {target: {value: 'test@mail.com'}})
    // fireEvent.change(signUpPassword, {target: {value: 'asdfJkl;90'}})
    user.type(signUpEmail, 'test@mail.com');
    expect(signUpEmail).toHaveValue('');
});
 