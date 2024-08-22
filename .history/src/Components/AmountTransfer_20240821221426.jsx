import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/AmountTransfer.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const AmountTransfer = () => {
  // Total income
  const totalIncome = 1000000;

  // User input expenses
  const expenses = {
    card: 1200,
    sameBank: 4500,
    wallet: 3200,
    otherBank: 1150,
  };

  // Calculate total expenses
  const totalExpenses = Object.values(expenses).reduce((acc, value) => acc + value, 0);

  // Calculate percentages
  const percentages = {
    card: (expenses.card / totalIncome) * 100,
    sameBank: (expenses.sameBank / totalIncome) * 100,
    wallet: (expenses.wallet / totalIncome) * 100,
    otherBank: (expenses.otherBank / totalIncome) * 100,
  };

  // Calculate remaining balance
  const remainingBalance = totalIncome - totalExpenses;

  // Data for the chart
  const data = {
    labels: [
      'Transfer via Card',
      'Transfer to Same Bank',
      'Transfer via Wallet',
      'Transfer to Other Bank',
    ],
    datasets: [
      {
        data: [
          percentages.card,
          percentages.sameBank,
          percentages.wallet,
          percentages.otherBank,
        ],
        backgroundColor: ['#0984e3', '#6c5ce7', '#00cec9', '#a29bfe'],
        hoverBackgroundColor: ['#74b9ff', '#a29bfe', '#81ecec', '#dfe6e9'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="amount-transfer-container">
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
        <div className="chart-label">
          <p>${expenses.card}</p>
          <span>Transfer via Card</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [percentages.sameBank] }] }} options={options} />
        <div className="chart-label">
          <p>${expenses.sameBank}</p>
          <span>Transfer to Same Bank</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [percentages.wallet] }] }} options={options} />
        <div className="chart-label">
          <p>${expenses.wallet}</p>
          <span>Transfer via Wallet</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [percentages.otherBank] }] }} options={options} />
        <div className="chart-label">
          <p>${expenses.otherBank}</p>
          <span>Transfer to Other Bank</span>
        </div>
      </div>
      <div className="balance-summary">
        <h3>Total Income: ${totalIncome}</h3>
        <h3>Total Expenses: ${totalExpenses}</h3>
        <h3>Remaining Balance: ${remainingBalance}</h3>
      </div>
    </div>
  );
};

export default AmountTransfer;
