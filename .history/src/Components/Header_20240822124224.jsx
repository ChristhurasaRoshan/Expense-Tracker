import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice'; // Import your logout action
import '../Styles/Header.css';

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate to handle redirection
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action (update your Redux store or clear authentication tokens)
    dispatch(logout());
    
    // Redirect to the login page
    navigate('/login'); // Use navigate for redirection
  };

  return (
    <div className="header">
      <h1>Project Expense Tracking Software</h1>
      <div className="user-profile">
        
        <img src="user-profile.jpg" alt="Profile" />
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
