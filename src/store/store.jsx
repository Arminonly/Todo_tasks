import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const rootreducer = configureStore({
  reducer: {
    todoListReducer: todoReducer
  }
});
