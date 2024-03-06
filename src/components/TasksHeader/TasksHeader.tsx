import { useSelector } from 'react-redux';

const TasksHeader = (props) => {
  const tasks = useSelector((state) => state.todoList);
  const undoneTasks = tasks.filter((task) => !task.done);

  return (
    <header>
      <h1>Todo List</h1>
      <p>
        Tâches en cours : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
