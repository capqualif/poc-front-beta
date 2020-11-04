import { configureStore } from '@reduxjs/toolkit';
import sailorReducer from '../../features/sailorData/sailorsSlice';

const store = configureStore({
  reducer: {
    sailors: sailorReducer
  }
});

export default store;