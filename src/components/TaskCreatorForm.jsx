import { Button, ConfigProvider, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setText, setTodos } from '../store/actions';

export const TaskCreatorForm = ({logAction, colors2, getHoverColors, getActiveColors}) => {
  const dispatch = useDispatch();
  const {text,todos} = useSelector(state => state.todoListReducer);

  const addNewTodo = e => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = {
      id: v4(),
      text,
      completed: false,
      isEdit: false
    };
    dispatch(setTodos([...todos, newTodo]));
    dispatch(setText(''));
  };

  const onHandleSubmit = e => {
    logAction('add text', text);
   addNewTodo(e)
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Typography.Title level={4}>
        <Link to="/"> Log Out</Link>
      </Typography.Title>

      <form onSubmit={onHandleSubmit}>
        <Input
          style={{ width: 300 }}
          value={text}
          onChange={e => dispatch(setText(e.target.value))}
        />

        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                  colors2
                ).join(', ')})`,
                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                  colors2
                ).join(', ')})`,
                lineWidth: 0
              }
            }
          }}
        >
          <Button
            style={{ marginLeft: 15 }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            add task
          </Button>
        </ConfigProvider>
      </form>
    </div>
  );
};
