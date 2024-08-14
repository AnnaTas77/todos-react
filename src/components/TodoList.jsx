import Todo from "./Todo.jsx";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map((todo) => (
        <Todo {...todo} onChange={props.onChange} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
