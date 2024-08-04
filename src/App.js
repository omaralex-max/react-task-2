import './App.css';
import React, { useState } from 'react';
import TodoAdd from './components/todoadd/todoadd';
import LIST from './components/list/list';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'doctor', completed: true },
    { id: 2, text: 'school', completed: false }
  ]);

  function addTask(text) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
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
    <>
      <TodoAdd addTask={addTask} />
      <LIST tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </>
  );
}

export default App;
