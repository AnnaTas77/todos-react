import { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    // Prevent the form from being submitted to a server.
    event.preventDefault();

    // Use the text to create a new todo.
    props.onSubmit(text);

    // Clear the form.
    setText("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="todo-input">Todo</label>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Add Todo</button>
      </p>
    </form>
  );
}

export default TodoForm;
