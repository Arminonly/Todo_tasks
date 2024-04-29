import { useEffect } from 'react';
import { TodoList } from '../components/TodoList';

export const withLogger = (TodoList) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${TodoList} mounted.`);
    }, []);
    return <TodoList {...props} />;
  };
};
