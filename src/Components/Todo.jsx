const Todo = (props) => {
  console.log(props.removeTodo);
  return (
    <div>
      <h3>{props.item}</h3>
      <button onClick={() => props.removeTodo(props.id)}>X</button>
    </div>
  );
};
export default Todo;
