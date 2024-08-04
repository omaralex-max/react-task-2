
import React from 'react';
import './list.css';
import TodoItem from './listprops';

function LIST({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default LIST;
