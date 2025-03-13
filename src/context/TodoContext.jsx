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
    nightMode,
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
        nightMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
