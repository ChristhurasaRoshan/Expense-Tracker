import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/transactionSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    auth: authReducer,
  },
});

export default store;
