import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo";
const Form = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      Add Todo: <input type="text" onChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
};
export default connect(null, { addTodo })(Form);
