// src/Components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Styles/Sidebar.css'; // Ensure the path is correct

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">EXTRACK</div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/bank-accounts">Bank Accounts</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
