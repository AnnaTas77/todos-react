function Todo(props) {
  return (
    <li className="Todo">
      <label htmlFor={`todo-${props.id}`}>
        <input
          id={`todo-${props.id}`}
          type="checkbox"
          checked={props.done}
          readOnly={true} // remove once we add state
        />
        <span>{props.text}</span>
      </label>
    </li>
  );
}

export default Todo;
