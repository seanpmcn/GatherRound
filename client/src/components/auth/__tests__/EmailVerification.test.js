import { render } from "@testing-library/react";
import EmailVerification from '../EmailVerification';
import { BrowserRouter } from "react-router-dom";


test('should contain button', () => {
    const { getByRole } = render(
        <BrowserRouter>
            <EmailVerification/>
        </BrowserRouter>
    );
    const button = getByRole('button', {hidden:true});
    expect(button).toBeInTheDocument();
});