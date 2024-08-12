function App() {
  const todos = [
    { id: "todo-rDOsl4VDHRSt_o2xLSnkb", text: "walk the dogs", done: true },
    { id: "todo-ndKAwWR1NEc0QmwtIoy85", text: "go food shopping", done: false },
    { id: "todo-Yu40jH4t75SCgNcvWV8Ih", text: "cook dinner", done: false },
  ];

  return (
    <>
      <h1>Todos</h1>

      <form className="TodoForm">
        <p>
          <label htmlFor="todo-input">Todo</label>
          <input id="todo-input" type="text" />
        </p>
        <p>
          <button type="submit">Add Todo</button>
        </p>
      </form>

      <ul className="TodoList">
        {todos.map((todo) => (
          <li className="Todo" key={todo.id}>
            <label htmlFor={`todo-${todo.id}`}>
              <input
                id={`todo-${todo.id}`}
                type="checkbox"
                checked={todo.done}
                readOnly={true} // remove once we add state
              />
              <span>{todo.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
