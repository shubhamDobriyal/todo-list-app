// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete, editTask } from '../features/tasksSlice';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => dispatch(deleteTask(index))}
          onToggle={() => dispatch(toggleComplete(index))}
          onEdit={(newTask) => dispatch(editTask({ index, newTask }))}
        />
      ))}
    </ul>
  );
};

export default TaskList;
