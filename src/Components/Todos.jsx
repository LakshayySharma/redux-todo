import Todo from "./Todo";
import { removeTodo } from "../actions/todo";
import { connect } from "react-redux";
const Todos = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          item={todo.todo}
          removeTodo={removeTodo}
          id={todo.id}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
export default connect(mapStateToProps, { removeTodo })(Todos);
