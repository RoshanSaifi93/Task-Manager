import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
