import { useState } from 'react';
import { Button, ConfigProvider, Input } from 'antd';
import { FaEdit } from 'react-icons/fa';

export const TodoList = ({todo,colors1,getHoverColors,getActiveColors,colors3,finishedTodo,editTodo, deleteTodo,text}) => {
  const [editText, setEditText] = useState(text)
  
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

      <Input
        style={{ width: 250 }}
        className={todo.completed ? 'finished' : ''}
         value={todo.text}//?
         onChange={e=>setEditText(e.target.value,todo.id)} //?
       />
      {/* редактировать таск */}
      <span>
        <FaEdit 
        onClick={()=>editTodo(todo.id, todo.editText)} //? 
        style={{ margin: '0px 10px', cursor: 'pointer' }} />
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
