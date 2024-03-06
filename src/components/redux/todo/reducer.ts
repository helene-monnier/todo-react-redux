/*
import { createReducer } from '@reduxjs/toolkit';
import { TodoState } from '../../types';
import { addTask, toggleTask, deleteTask } from './actions';

const initialState: TodoState = {
  todoList: [
    { id: 1, text: 'Faire les courses', done: false },
    { id: 2, text: 'Ménage !', done: true },
  ],
};

// reducer pour gérer le stockage des tasks
const todoReducer = createReducer(initialState, (builder) => {
  // case pour ajouter une task
  builder
    .addCase(addTask, (state, action) => {
      const tasksCopy = [...state.todoList];
      // on met à jour la copie du tableau avec la nouvelle tâche
      tasksCopy.push({
        id: Date.now(),
        text: action.payload.text,
        done: false, // c'est une nouvelle tâche, donc elle est fause par defaut
      });
      state.todoList = tasksCopy;
    });

    // case pour toggle une task
    .addCase(toggleTask, (state, action) => {
      const task = state.todoList.find(t => t.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    });

  // case pour delete une task
  builder.addCase(deleteTask, (state, action) => {
    state.todoList = state.todoList.filter(t => t.id !== action.payload)
  });
});

export default todoReducer;
*/

import { createReducer } from '@reduxjs/toolkit';
import { TodoState } from '../../types';
import { addTask, toggleTask, deleteTask } from './actions';

const initialState: TodoState = {
  todoList: [
    { id: 1, text: 'Faire les courses', done: false },
    { id: 2, text: 'Ménage !', done: true },
  ],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.todoList.push({
        id: Date.now(),
        text: action.payload.text,
        done: false,
      });
    })
    .addCase(toggleTask, (state, action) => {
      const task = state.todoList.find(
        (taskItem) => taskItem.id === action.payload
      );
      if (task) {
        task.done = !task.done;
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.todoList = state.todoList.filter(
        (taskItem) => taskItem.id !== action.payload
      );
    });
});

export default todoReducer;
