const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "add_todo":
      return [...state, payload];
    case "delete_todo":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
}
