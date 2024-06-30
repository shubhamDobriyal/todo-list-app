// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initialize tasks from localStorage if available
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false }); // Add new task to state
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1); // Remove task from state
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const task = state[action.payload]; // Toggle task completion status
      task.completed = !task.completed; 
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { index, newTask } = action.payload; // Edit task text
      state[index].text = newTask;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

export const { addTask, deleteTask, toggleComplete, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
