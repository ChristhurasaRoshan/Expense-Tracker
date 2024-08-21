import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../Styles/ExpenseChart.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Active User',
        data: [5000, 4000, 4500, 6000, 7000, 8000, 7000, 6500, 6000, 7500, 6800, 5900],
        backgroundColor: '#6c5ce7',
      },
      {
        label: 'Inactive User',
        data: [2000, 3000, 3500, 4000, 4500, 5000, 4800, 4000, 3000, 3500, 3200, 2500],
        backgroundColor: '#74b9ff',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Latest Transactions',
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
