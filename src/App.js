// src/App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="my-4 text-center text-white">To-Do List</h1>
          <TaskInput />
          <div className="list-container">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
