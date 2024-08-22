import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div className="app">
                  <Sidebar />
                  <div className="main-content">
                    <Header />
                    <Dashboard />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          {/* Optionally add a redirect or not found page */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
