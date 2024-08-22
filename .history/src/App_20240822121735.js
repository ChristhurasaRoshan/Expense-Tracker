import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/Header';
import Dashboard from '../src/Components/Dashboard';
import LoginPage from '../Components/LoginPage';

import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import RegisterPage from './Components/RegisterPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
