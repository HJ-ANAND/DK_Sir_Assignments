// AddTodo.jsx
// Naya todo add karne ka form
// Props milte hain: onAdd (function)

import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (text === "") {
      return;
    }

    onAdd(text); // parent ko text bheja
    setText(""); // input clear kiya
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        className="add-todo-input"
        type="text"
        value={text}
        onChange={function (e) {
          setText(e.target.value);
        }}
        placeholder="Naya todo likho"
      />
      <button className="add-todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
