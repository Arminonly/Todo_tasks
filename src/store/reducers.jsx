import { TODOTEXT, TODO_TODOS } from './actions';

const initialState = {
  text: '',
  todos: []
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOTEXT:
      return {
        ...state,
        text: action.payload
      };
    case TODO_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
  }
};
