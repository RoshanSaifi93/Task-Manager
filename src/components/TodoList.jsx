const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li className={todo.completed ? "completed" : ""}
          key={todo.id}
           onClick={() => toggleTodo(todo.id)} >

          {todo.text}
          <button onClick={(e) => {e.stopPropagation();   // important!
            deleteTodo(todo.id);}}>❌Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
