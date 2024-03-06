import { Provider } from 'react-redux';
// import './styles.css';
import TaskForm from '../TaskForm/TaskForm';
import TasksHeader from '../TasksHeader/TasksHeader';
import TasksList from '../TasksList/TasksList';
import store from '../redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TasksHeader />
          <TasksList />
          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}
