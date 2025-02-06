import ToDoItem from "./ToDoItem.jsx";

/* eslint-disable react/prop-types */

function ToDoList({ todos }) {
  return (
    <div className={`scrollbar h-52 overflow-x-hidden overflow-y-auto pt-4`}>
      {todos.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ToDoList;
