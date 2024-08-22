import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the Redux store
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/Header';
import Dashboard from '../src/Components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}> {/* Wrap the app with Provider */}
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Dashboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
