import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import store from './store'; // Import the Redux store
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Login from './Pages/Login'; // Ensure paths are correct
import Register from './Pages/Register'; // Ensure paths are correct
import PrivateRoute from './Components/PrivateRoute'; // Optional: Create a private route wrapper

import './App.css';

function App() {
  return (
    <Provider store={store}> {/* Wrap the app with Provider */}
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
