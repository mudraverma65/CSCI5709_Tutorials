import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const LoginP = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a JSON object with the username and password
    const credentials = {
      username: username,
      password: password,
    };

    // Send the JSON data to the API endpoint
    fetch('https://express-t4.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        if (data.message === 'Login success!') {
            // Login success
            setError('');
            console.log(data);
            navigate('/profile')
          } else {
            // Login failed
            setError('Invalid username or password');
            console.error('Error:', data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setError('An error occurred. Please try again.');
        });
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
      <h2>Login</h2>
          <TextField
            className="text-field"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="text-field"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <div className="button-container">
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginP;