import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
export default function App() {
  return (
    <Provider store={store}>
      <Form />
      <Todos />
    </Provider>
  );
}
