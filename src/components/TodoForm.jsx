function TodoForm() {
  return (
    <form className="TodoForm">
      <p>
        <label htmlFor="todo-input">Todo</label>
        <input id="todo-input" type="text" />
      </p>
      <p>
        <button type="submit">Add Todo</button>
      </p>
    </form>
  );
}

export default TodoForm;
