import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../features/sailorData/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;