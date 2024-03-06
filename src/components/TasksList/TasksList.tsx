import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';

const TasksList = (props) => {
  const tasks = useSelector((state) => state.todo);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;
