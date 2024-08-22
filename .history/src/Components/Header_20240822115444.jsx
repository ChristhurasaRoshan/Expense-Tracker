import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Project Expense Tracking Software</h1>
      <div className="user-profile">
        <span>David</span>
        <img src="user-profile.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
