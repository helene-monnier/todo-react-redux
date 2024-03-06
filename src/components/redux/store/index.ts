import { configureStore } from '@reduxjs/toolkit';
import todo from '../todo';

const store = configureStore({
  reducer: {
    todo: todo.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
