import React, { useState } from 'react';
import Card from './Card';
import TransactionList from './TransactionList';
import ExpenseChart from './ExpenseChart';
import AmountTransfer from './AmountTransfer';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  const [totalIncome] = useState(1000000); // Total income set to $1,000,000
  const [expenses, setExpenses] = useState(0); // Initial expenses

  // Calculate current balance and percentage of expenses
  const currentBalance = totalIncome - expenses;
  const expensePercentage = ((expenses / totalIncome) * 100).toFixed(1);

  // Handle user input for expenses
  const handleExpenseChange = (e) => {
    setExpenses(Number(e.target.value));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="dashboard-header">
          <Card title="Current Balance" amount={`$${currentBalance.toLocaleString()}`} percentage={`${(100 - expensePercentage).toFixed(1)}%`} />
          <Card title="Total Income" amount={`$${totalIncome.toLocaleString()}`} percentage="0%" />
          <Card title="Total Expenses" amount={`$${expenses.toLocaleString()}`} percentage={`${expensePercentage}%`} />
        </div>
        <ExpenseChart />
        <AmountTransfer />
      </div>
      <div className="dashboard-right">
        <div className="latest-transactions">
          <h2>Latest Transactions</h2>
          <TransactionList />
        </div>
        <div className="expense-input">
          <label htmlFor="expense">Enter Expenses: </label>
          <input
            id="expense"
            type="number"
            value={expenses}
            onChange={handleExpenseChange}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
