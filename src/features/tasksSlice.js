// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false });
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const task = state[action.payload];
      task.completed = !task.completed;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { index, newTask } = action.payload;
      state[index].text = newTask;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

export const { addTask, deleteTask, toggleComplete, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
