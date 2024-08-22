// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store'; // Ensure store.js exists or adjust path if different
import LoginPage from './components/LoginPage'; // Correct path to LoginPage
import RegisterPage from './components/RegisterPage'; // Correct path to RegisterPage
import DashboardPage from './components/DashboardPage'; // Correct path to DashboardPage
import PrivateRoute from './components/PrivateRoute'; // Create this component if necessary

import './styles/App.css'; // Correct path to App.css

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
