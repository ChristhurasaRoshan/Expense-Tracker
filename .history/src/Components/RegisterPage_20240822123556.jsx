// src/Components/RegisterPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css'; // Import the CSS file

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      // Mock registration
      dispatch(register({ email }));
      navigate('/dashboard');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
