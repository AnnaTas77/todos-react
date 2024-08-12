import React from "react";

function Todo(props) {
  return (
    <li className="Todo">
      <label htmlFor={`todo-${props.todo.id}`}>
        <input
          id={`todo-${props.todo.id}`}
          type="checkbox"
          checked={props.todo.done}
          readOnly={true} // remove once we add state
        />
        <span>{props.todo.text}</span>
      </label>
    </li>
  );
}

export default Todo;
