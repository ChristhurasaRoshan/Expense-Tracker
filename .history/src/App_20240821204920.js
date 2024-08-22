import React from 'react';
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/Header';
import Dashboard from '../src/Components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
