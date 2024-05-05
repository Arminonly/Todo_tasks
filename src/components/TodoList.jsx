import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ConfigProvider, Input } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { setTodos } from '../store/todoSlice';

export const TodoList = ({todo, colors1, getHoverColors, getActiveColors, colors3}) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoListReducer);
  const [updateText, setUpdateText] = useState(todo.text);

  const updateTodo = (id, text) => {
    const updated = [...todos].map((item) =>
      item.id === id ? { ...item, isEdit: !item.isEdit, text: text } : item
    );
    dispatch(setTodos(updated));
  };

  const deleteTodo = (id) => {
    const deleted = [...todos].filter((el) => el.id !== id);
    dispatch(setTodos(deleted));
  };

  const finishedTodo = (id) => {
    const completedTodo = [...todos];
    completedTodo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    dispatch(setTodos(completedTodo));
  };

  return (
    <>
      {/* отметка о выполнении */}
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(', ')})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(', ')})`,
              lineWidth: 0
            }
          }
        }}
      >
        <Button
          onClick={() => finishedTodo(todo.id)}
          style={{ marginRight: 15 }}
          type="primary"
          size="large"
        >
          done
        </Button>
      </ConfigProvider>
      {todo.isEdit ? (
        <Input
          style={{ width: 250 }}
          className={todo.completed ? 'finished' : ''}
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        />
      ) : (
        <Input
          style={{ width: 250 }}
          className={todo.completed ? 'finished' : ''}
          value={updateText}
        />
      )}
      {/* редактировать таск */}
      <span>
        <FaEdit
          onClick={() => updateTodo(todo.id, updateText)}
          style={{ margin: '0px 10px', cursor: 'pointer' }}
        />
      </span>
      {/* удалить таск */}
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
              colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                colors3
              ).join(', ')})`,
              colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                colors3
              ).join(', ')})`,
              lineWidth: 0
            }
          }
        }}
      >
        <Button
          style={{ marginLeft: 15 }}
          type="primary"
          size="large"
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </Button>
      </ConfigProvider>
    </>
  );
};
