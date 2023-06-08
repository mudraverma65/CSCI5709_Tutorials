import React, { useState } from 'react';
import './styles.css';
import { Box, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isFirstNameValid = validateFirstName(firstName);
        const isLastNameValid = validateLastName(lastName);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isConfirmPasswordValid = isPasswordMatch && confirmPassword !== '';

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            console.log('Submitted!');
            navigate('/profile', { state: { firstName, lastName, email } });
            console.log(firstName, lastName, email)
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const isPasswordMatch = password === confirmPassword;

    const validateFirstName = (value) => {
        // Only letters
        return /^[a-zA-Z]+$/.test(value);
    };

    const validateLastName = (value) => {
        // Only letters
        return /^[a-zA-Z]+$/.test(value);
    };

    const validateEmail = (value) => {
        // Valid email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validatePassword = (value) => {
        // Alpha-numeric and special characters, minimum 8 characters
        return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/.test(value);
    };

    return (
    <div class = 'Parent'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div class = 'FormBox'>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%'}}>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        margin="normal"
                        error={!validateFirstName(firstName)}
                        helperText={!validateFirstName(firstName) && 'Accepting only letters'}
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="normal"
                        error={!validateLastName(lastName)}
                        helperText={!validateLastName(lastName) && 'Accepting only letters'}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        error={!validateEmail(email)}
                        helperText={!validateEmail(email) && 'Enter valid email ID'}
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        error={!validatePassword(password)}
                        helperText={!validatePassword(password) && 'Minimum 8 characters. Should include number and special characters'}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Confirm Password"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        margin="normal"
                        error={!isPasswordMatch}
                        helperText={!isPasswordMatch && 'Passwords do not match'}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained" type="submit" color="primary" disabled={!isPasswordMatch}>Register</Button>
                </Box>
            </div>
        </form> 
    </div>
    );
};

export default RegisterForm;
