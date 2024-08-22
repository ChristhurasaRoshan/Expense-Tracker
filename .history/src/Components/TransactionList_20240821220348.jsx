import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, deleteTransaction, updateTransaction } from '../slices/transactionSlice';
import '../Styles/TransactionList.css';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const [newTransaction, setNewTransaction] = useState({ name: '', date: '', amount: '', status: 'Success' });
  const [editTransaction, setEditTransaction] = useState(null);

  const handleAddTransaction = () => {
    if (newTransaction.name && newTransaction.date && newTransaction.amount) {
      dispatch(addTransaction(newTransaction));
      setNewTransaction({ name: '', date: '', amount: '', status: 'Success' });
    }
  };

  const handleUpdateTransaction = (id) => {
    if (editTransaction) {
      dispatch(updateTransaction({ id, ...editTransaction }));
      setEditTransaction(null);
    }
  };

  const handleEditClick = (transaction) => {
    setEditTransaction(transaction);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (isConfirmed) {
      dispatch(deleteTransaction(id));
    }
  };

  return (
    <div className="transaction-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <input
                    type="text"
                    value={editTransaction.name}
                    onChange={(e) => setEditTransaction({ ...editTransaction, name: e.target.value })}
                  />
                ) : (
                  transaction.name
                )}
              </td>
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <input
                    type="date"
                    value={editTransaction.date}
                    onChange={(e) => setEditTransaction({ ...editTransaction, date: e.target.value })}
                  />
                ) : (
                  transaction.date
                )}
              </td>
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <input
                    type="text"
                    value={editTransaction.amount}
                    onChange={(e) => setEditTransaction({ ...editTransaction, amount: e.target.value })}
                  />
                ) : (
                  transaction.amount
                )}
              </td>
              <td>{transaction.status}</td>
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <button onClick={() => handleUpdateTransaction(transaction.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(transaction)}>Edit</button>
                )}
                <button onClick={() => handleDelete(transaction.id)}>Delete</button> {/* Add confirmation prompt here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-transaction">
        <h3>Add New Transaction</h3>
        <input
          type="text"
          placeholder="Name"
          value={newTransaction.name}
          onChange={(e) => setNewTransaction({ ...newTransaction, name: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default TransactionList;
