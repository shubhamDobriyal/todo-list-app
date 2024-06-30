// src/App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center text-white">To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
