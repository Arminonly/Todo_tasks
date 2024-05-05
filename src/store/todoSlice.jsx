import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  todos: []
};

export const todoReducer = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const {setText, setTodos} = todoReducer.actions

export default todoReducer.reducer