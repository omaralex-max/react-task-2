import React from "react";
import "./list.css";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="todo-list2">
      <table>
        <thead>
          <tr>
            <th>TASK</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
            </td>
            <td>
              <button
                className={`complete ${
                  task.completed ? "completed" : "not-completed"
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? "Completed" : "NOT Completed"}
              </button>
            </td>
            <td>
              <button className="dalete" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItem;
