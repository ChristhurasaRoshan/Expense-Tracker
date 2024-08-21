import React from 'react';
import '../Styles/Card.css';

const Card = ({ title, amount, percentage }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="amount">{amount}</p>
      <p className="percentage">{percentage}</p>
    </div>
  );
};

export default Card;
