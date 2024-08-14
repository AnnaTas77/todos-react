import { nanoid } from "nanoid";
import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([
    { id: "todo-rDOsl4VDHRSt_o2xLSnkb", text: "walk the dogs", done: true },
    { id: "todo-ndKAwWR1NEc0QmwtIoy85", text: "go food shopping", done: false },
    { id: "todo-Yu40jH4t75SCgNcvWV8Ih", text: "cook dinner", done: false },
  ]);

  function addTodo(text) {
    const newTodo = { text, done: false, id: `todo-${nanoid()}` };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todos</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onChange={toggleTodo} />
    </>
  );
}

export default App;
