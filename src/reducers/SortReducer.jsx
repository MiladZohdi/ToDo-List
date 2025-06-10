import { useReducer } from "react";

const initialState = {
  status: "sortLatest",
  sortType: "sortLatest",
  data: [],
  sortedValue: [],
  isEditing: false,
  editData: {},
  nightMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "initialData":
      return {
        ...state,
        sortedValue: action.payload,
        data: action.payload,
      };

    case "sortLatest":
      return {
        ...state,
        sortType: "sortLatest",
        sortedValue: [...state.sortedValue].sort((a, b) =>
          b.created_at.localeCompare(a.created_at)
        ),
      };

    case "sortOldest":
      return {
        ...state,
        sortType: "sortOldest",
        sortedValue: [...state.sortedValue].sort((a, b) =>
          a.created_at.localeCompare(b.created_at)
        ),
      };

    case "sortLatestTask":
      return {
        ...state,
        sortType: "sortLatestTask",
        sortedValue: [...state.sortedValue].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
      };

    case "sortOldestTask":
      return {
        ...state,
        sortType: "sortOldestTask",
        sortedValue: [...state.sortedValue].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      };

    case "showOnlyPendings":
      return {
        ...state,
        status: "showOnlyPendings",
        sortedValue: state.data.filter((todo) => todo.status === "Pending"),
      };

    case "showAll":
      return {
        ...state,
        status: "showAll",
        sortedValue: [...state.data],
      };

    case "editData":
      return { ...state, isEditing: true, editData: action.payload };

    case "editDone":
      return { ...state, isEditing: false, editData: {} };
    default:
      return state;
  }
}

function useTodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function initialData(data) {
    dispatch({ type: "initialData", payload: data });
  }

  function sort(data) {
    dispatch({ type: data });
  }

  function showAll() {
    dispatch({ type: "showAll" });
    sort(state.sortType);
  }

  function showOnlyPendingsDispatch() {
    dispatch({ type: "showOnlyPendings" });
    sort(state.sortType);
  }

  function editDataDispatch(data) {
    dispatch({ type: "editData", payload: data });
  }

  function editDoneDispatch() {
    dispatch({ type: "editDone" });
  }

  return {
    state,
    initialData,
    sort,
    showOnlyPendingsDispatch,
    showAll,
    editDataDispatch,
    editDoneDispatch,
  };
}

export { useTodoReducer };
