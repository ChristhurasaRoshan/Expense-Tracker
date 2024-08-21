import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/AmountTransfer.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const AmountTransfer = () => {
  const data = {
    labels: ['Transfer via Card', 'Transfer to Same Bank', 'Transfer via Wallet', 'Transfer to Other Bank'],
    datasets: [
      {
        data: [1200, 4500, 3200, 1150],
        backgroundColor: ['#0984e3', '#6c5ce7', '#00cec9', '#a29bfe'],
        hoverBackgroundColor: ['#74b9ff', '#a29bfe', '#81ecec', '#dfe6e9'],
        borderWidth: 1,
      },
    ],
  };

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
          <p>$1200</p>
          <span>Transfer via Card</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [4500] }] }} options={options} />
        <div className="chart-label">
          <p>$4500</p>
          <span>Transfer to Same Bank</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [3200] }] }} options={options} />
        <div className="chart-label">
          <p>$3200</p>
          <span>Transfer via Wallet</span>
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={{ ...data, datasets: [{ ...data.datasets[0], data: [1150] }] }} options={options} />
        <div className="chart-label">
          <p>$1150</p>
          <span>Transfer to Other Bank</span>
        </div>
      </div>
    </div>
  );
};

export default AmountTransfer;
