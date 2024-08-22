import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: "Sebastian Kingsley", date: "02/06/2023", amount: "$50.2", status: "Success" },
  { id: 2, name: "Amazon Prime", date: "02/06/2023", amount: "$43.9", status: "Success" },
  { id: 3, name: "Penelope Everly", date: "06/06/2023", amount: "$34.9", status: "Success" },
];

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
        return state.filter(transaction => transaction.id !== action.payload);
    },
    deleteTransaction: (state, action) => {
      return state.filter(transaction => transaction.id !== action.payload);
    },
    updateTransaction: (state, action) => {
      const index = state.findIndex(transaction => transaction.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
