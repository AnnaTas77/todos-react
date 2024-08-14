import Todo from "./Todo.jsx";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
