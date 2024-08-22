import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Assuming you're using Redux for authentication state
import { logout } from '../slices/authSlice'; // Import your logout action
import '../Styles/Header.css';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action (update your Redux store or clear authentication tokens)
    dispatch(logout());
    
    // Redirect to the login page
    history.push('/login');
  };

  return (
    <div className="header">
      <h1>Project Expense Tracking Software</h1>
      <div className="user-profile">
        <span>David</span>
        <img src="user-profile.jpg" alt="Profile" />
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
