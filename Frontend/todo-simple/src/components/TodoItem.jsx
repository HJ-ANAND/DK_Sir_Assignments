// TodoItem.jsx
// Ek akela todo item dikhata hai
// Props milte hain: todo (object), onDelete (function)

function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>

      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
