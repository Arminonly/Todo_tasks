import { useSelector } from 'react-redux';
import { TinyColor } from '@ctrl/tinycolor';
import { TaskCreatorForm } from './TaskCreatorForm';
import { TodoList } from './TodoList';
import { withLogger } from '../HOC/withLogger';

const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const TaskCreatorFormHOC = withLogger(TaskCreatorForm);
export const TodosPage = () => {
  const { text, todos } = useSelector((state) => state.todoListReducer);

  return (
    <>
      <TaskCreatorFormHOC
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
            />
          </div>
        ))
      ) : (
        <h2> Список задач пуст</h2>
      )}
    </>
  );
};
