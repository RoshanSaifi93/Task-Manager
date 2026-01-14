import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAll = () => {
    setTodos([]);
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h2>Task Manager App</h2>

      <TodoForm addTodo={addTodo} />

      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="counters">
        <p>
          Total: <strong>{totalTodos}</strong>
        </p>
        <p>
          Completed: <strong>{completedTodos}</strong>
        </p>
      </div>

      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      
      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default App;
