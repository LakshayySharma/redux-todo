import { v4 as uuidv4 } from "uuid";
export const addTodo = (todo) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: "add_todo",
    payload: {
      todo,
      id
    }
  });
};

export const removeTodo = (id) => (dispatch) => {
  dispatch({
    type: "delete_todo",
    payload: id
  });
};
