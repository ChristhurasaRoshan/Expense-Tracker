import React from 'react';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">EXTRACK</div>
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Cards</li>
        <li>Bank Accounts</li>
        <li>Notifications</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
