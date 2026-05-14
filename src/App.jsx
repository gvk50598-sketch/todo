import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>
          <span className="gradient-text">TODO</span> Application
        </h1>
        <p className="subtitle">
          Organize your tasks and get things done ✅
        </p>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task +</button>
        </div>

        <div className="task-section">
          <div className="task-header">
            <h2>Your Tasks</h2>
            <span>{todos.length} tasks</span>
          </div>

          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one!</p>
          ) : (
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <div className="task-left">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTask(todo.id)}
                    />
                    <span
                      className={todo.completed ? "completed" : ""}
                    >
                      {todo.text}
                    </span>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(todo.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="footer-text">
          💡 Click on a task to mark it as complete
        </p>
      </div>
    </div>
  );
}

export default App;