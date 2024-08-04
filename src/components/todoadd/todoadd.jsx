
import React, { useState } from 'react';
import './todoadd.css';

function TodoAdd({ addTask }) {
  const [text, setText] = useState('');

  return (
    <div className="todo-list">
      <h1>ToDo List !</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button className='add' onClick={() => {
        if (text.trim()) {
          addTask(text);
          setText('');
        }
      }}>
        Add Task
      </button>
    </div>
  );
}

export default TodoAdd;
