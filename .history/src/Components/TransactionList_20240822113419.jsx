import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, deleteTransaction, updateTransaction } from '../slices/transactionSlice';
import '../Styles/TransactionList.css';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const [newTransaction, setNewTransaction] = useState({ name: '', date: '', amount: '', status: 'Success' });
  const [editTransaction, setEditTransaction] = useState(null);
  const [errors, setErrors] = useState({});

  const validateTransaction = (transaction) => {
    const errors = {};
    if (!transaction.name) errors.name = 'Name is required';
    if (!transaction.date) errors.date = 'Date is required';
    if (!transaction.amount || isNaN(transaction.amount) || Number(transaction.amount) <= 0) errors.amount = 'Amount must be a positive number';
    return errors;
  };

  const handleAddTransaction = () => {
    const validationErrors = validateTransaction(newTransaction);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addTransaction({ ...newTransaction, id: Date.now() })); // Add unique id
      setNewTransaction({ name: '', date: '', amount: '', status: 'Success' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleUpdateTransaction = (id) => {
    if (editTransaction) {
      const validationErrors = validateTransaction(editTransaction);
      if (Object.keys(validationErrors).length === 0) {
        dispatch(updateTransaction({ id, ...editTransaction }));
        setEditTransaction(null);
        setErrors({});
      } else {
        setErrors(validationErrors);
      }
    }
  };

  const handleEditClick = (transaction) => {
    setEditTransaction({ ...transaction });
    setErrors({});
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
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <select
                    value={editTransaction.status}
                    onChange={(e) => setEditTransaction({ ...editTransaction, status: e.target.value })}
                  >
                    <option value="Success">Success</option>
                    <option value="Fail">Fail</option>
                  </select>
                ) : (
                  transaction.status
                )}
              </td>
              <td>
                {editTransaction && editTransaction.id === transaction.id ? (
                  <>
                    <button onClick={() => handleUpdateTransaction(transaction.id)}>Save</button>
                    <button onClick={() => setEditTransaction(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(transaction)}>Edit</button>
                    <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                  </>
                )}
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
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="date"
          placeholder="Date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
        />
        {errors.date && <p className="error">{errors.date}</p>}
        <input
          type="text"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
        />
        {errors.amount && <p className="error">{errors.amount}</p>}
        <select
          value={newTransaction.status}
          onChange={(e) => setNewTransaction({ ...newTransaction, status: e.target.value })}
        >
          <option value="Success">Success</option>
          <option value="Fail">Fail</option>
        </select>
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default TransactionList;
