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
    },
    finishedTodo: (state, action) => {
      const done = state.todos.find(todo => todo.id === action.payload);
      done.completed = !done.completed;
    }
  }
});

export const { setText, setTodos, finishedTodo } = todoReducer.actions;
export default todoReducer.reducer;
