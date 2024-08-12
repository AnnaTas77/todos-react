import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const todos = [
    { id: "todo-rDOsl4VDHRSt_o2xLSnkb", text: "walk the dogs", done: true },
    { id: "todo-ndKAwWR1NEc0QmwtIoy85", text: "go food shopping", done: false },
    { id: "todo-Yu40jH4t75SCgNcvWV8Ih", text: "cook dinner", done: false },
  ];

  return (
    <>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
