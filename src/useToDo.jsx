import { v4 as v4uuid } from "uuid";
import { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "AddToDO":
      return [
        ...state,
        { id: v4uuid(), text: action.payload, completed: false },
      ];
    case "todotoggle":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item,
      );
    case "removeTodo":
      return state.filter((item) => item.id !== action.payload);
    case "removeCompletedTodos":
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
}

function useToDo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (text) => dispatch({ type: "AddToDO", payload: text });
  const toggleTodo = (id) => dispatch({ type: "todotoggle", payload: id });
  const removeTodo = (id) => dispatch({ type: "removeTodo", payload: id });
  const clearCompleted = () => dispatch({ type: "removeCompletedTodos" });

  return { todos, addTodo, toggleTodo, removeTodo, clearCompleted };
}

export default useToDo;
