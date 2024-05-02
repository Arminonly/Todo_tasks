export const TODOTEXT = 'TODOTEXT';
export const TODO_TODOS = 'TODO_TODOS';

export const setText = (text) => ({
  type: TODOTEXT,
  payload: text
});

export const setTodos = (todos) => ({
  type: TODO_TODOS,
  payload: todos
});
