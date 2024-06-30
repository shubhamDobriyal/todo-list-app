// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // Handle adding a new task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
