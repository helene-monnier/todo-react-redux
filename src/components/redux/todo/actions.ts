import { createAction } from '@reduxjs/toolkit';
import { TodoItem } from '../../types';

export const addTask = createAction<TodoItem>('todo/NEW_TASK');
export const toggleTask = createAction<number>('todo/TOGGLE_TASK');
export const deleteTask = createAction<number>('todo/DELETE_TASK');

export default {
  addTask,
  toggleTask,
  deleteTask,
};
