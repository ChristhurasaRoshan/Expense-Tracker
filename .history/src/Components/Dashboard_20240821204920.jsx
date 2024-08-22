import React from 'react';
import Card from './Card';
import TransactionList from './TransactionList';
import ExpenseChart from './ExpenseChart';
import AmountTransfer from './AmountTransfer';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="dashboard-header">
          <Card title="Current Balance" amount="$8200" percentage="2.1%" />
          <Card title="Total Income" amount="$1550" percentage="7.9%" />
          <Card title="Total Expenses" amount="$5210" percentage="32%" />
        </div>
        <ExpenseChart />
        <AmountTransfer />
      </div>
      <div className="dashboard-right">
        <div className="latest-transactions">
          <h2>Latest Transactions</h2>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
