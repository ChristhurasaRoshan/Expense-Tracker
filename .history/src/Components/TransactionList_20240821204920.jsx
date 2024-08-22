import React from 'react';
import '../Styles/TransactionList.css';

const TransactionList = () => {
  const transactions = [
    { name: "Sebastian Kingsley", date: "02/06/2023", amount: "$50.2", status: "Success" },
    { name: "Amazon Prime", date: "02/06/2023", amount: "$43.9", status: "Success" },
    { name: "Penelope Everly", date: "06/06/2023", amount: "$34.9", status: "Success" },
    // Add more transactions here...
  ];

  return (
    <div className="transaction-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
