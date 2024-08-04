import React, { useState } from 'react';
import './todoadd.css';
import TodoItem from './todocomponent';
function TODO() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'doctor', completed: true },
    { id: 2, text: 'school', completed: false }
  ]);
  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="todo-list">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='add' onClick={() => addTask(text)}>Add Task</button>

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



export default TODO;
