// src/components/Task.js
import React, { useState } from 'react';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  const handleEdit = () => {
    onEdit(newTask);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-secondary' : 'bg-dark text-white border-white'} mb-2`}>
      {isEditing ? (
        <div className="d-flex flex-grow-1">
          <input
            type="text"
            className="form-control bg-dark text-white border-white mr-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-sm btn-success mr-2" onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span onClick={onToggle} className="flex-grow-1" style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
            {task.text}
          </span>
          <div>
            <button className={`btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-success'} mr-2`} onClick={onToggle}>
              {task.completed ? 'Unmark' : 'Mark Completed'}
            </button>
            <button className="btn btn-sm btn-warning mr-2" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
