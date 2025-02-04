/* eslint-disable react/prop-types */

import Button from "./Button";
import Input from "./Input";
import useToDo from "./useToDo";

function ToDoItem({ item }) {
  const { toggleTodo, removeTodo } = useToDo();
  return (
    <>
      <div className="mt-2 grid h-6 grid-cols-[1fr_24px_24px] items-center justify-between gap-2 text-sm tracking-wide">
        <p className={` ${item.completed ? "line-through" : ""}`}>
          {item.text}{" "}
        </p>
        <Input type="checkbox" onChange={() => toggleTodo(item.id)} />
        <Button type="delete" onClick={() => removeTodo(item.id)}>
          ×
        </Button>
      </div>
      <hr className="mt-2" />
    </>
  );
}

export default ToDoItem;
