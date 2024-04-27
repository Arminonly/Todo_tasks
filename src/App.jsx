import { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { v4 } from 'uuid';
import './App.css';
import { TaskCreatorForm } from './components/TaskCreatorForm';
import { TodoList } from './components/TodoList';

const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = {
      id: v4(),
      text,
      completed: false,
      isEdit: false
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  const updateTodo = (id, text) => {
    const updated = [...todos].map((item) =>
      item.id === id ? { ...item, isEdit: !item.isEdit, text: text } : item
    );
    setTodos(updated);
  };


  const deleteTodo = (id) => {
    const deleted = [...todos].filter((el) => el.id !== id);
    setTodos(deleted);
  };

  const finishedTodo = (id) => {
    const completedTodo = [...todos];
    completedTodo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    setTodos(completedTodo);
  };

  return (
    <>
      <TaskCreatorForm
        text={text}
        setText={setText}
        handleSubmit={addNewTodo}
        colors2={colors2}
        getHoverColors={getHoverColors}
        getActiveColors={getActiveColors}
      />

      {todos && todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} style={{ marginBottom: 15 }}>
            <TodoList
              colors1={colors1}
              getHoverColors={getHoverColors}
              getActiveColors={getActiveColors}
              colors3={colors3}
              todo={todo}
              text={text}
              deleteTodo={deleteTodo}
              finishedTodo={finishedTodo}
              updateTodo={updateTodo}
            />
          </div>
        ))
      ) : (
        <h2> Список задач пуст</h2>
      )}
    </>
  );
}

export default App;
