import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileComponent from './UserProfileComponent';

describe('The User Profile Component', () => {
    test('displays error message if first name blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: '' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@def.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/First Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });

    //TODO: create test to check for last name blank
    test('displays error message if last name blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: '' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@def.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Last Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for email blank
    test('displays error message if email blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: '' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Email cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for email invalid
    test('displays error message if email invalid', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Email must be valid/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password blank
    test('displays error message if password blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@def.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: '' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Password cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password confirm blank
    test('displays error message if password confirm blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@def.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: '' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Password confirm cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password and password confirm not matching
    test('displays error message if password and confirm do not match', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@abc.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword3' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Passwords do not match/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for successful submission (check for Thank you message)
    test('displays thnk you mesage if all data entered correctly', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Bob' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Smith' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'adc@def.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'ValidPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'ValidPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Thank you, Bob Smith, for updating your profile!/i);
        expect(errorMessage).toBeInTheDocument();
    });


});
