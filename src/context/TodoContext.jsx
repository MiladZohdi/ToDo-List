import { createContext } from "react";
import { useTodoReducer } from "../reducers/SortReducer";

/* eslint react/prop-types: 0 */

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const {
    state,
    initialData,
    sort,
    showAll,
    showOnlyPendingsDispatch,
    editDataDispatch,
    editDoneDispatch,
  } = useTodoReducer();
  return (
    <TodoContext.Provider
      value={{
        state,
        initialData,
        sort,
        showAll,
        showOnlyPendingsDispatch,
        editDataDispatch,
        editDoneDispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
