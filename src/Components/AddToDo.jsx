import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

/* eslint-disable react/prop-types */

function AddToDo({ addTodo, clearCompleted }) {
  const [text, setText] = useState("");

  function handleAddToDo(e) {
    e.preventDefault();

    if (!text) return;

    addTodo(text);

    setText("");
  }

  function handleRemoveCompleted(e) {
    e.preventDefault();

    clearCompleted();
  }
  return (
    <form className="grid h-10 grid-cols-[1fr_60px_70px] items-center justify-items-center gap-3 text-[16px] md:h-14 lg:h-16 xl:h-18">
      <Input
        placeholder="Enter a task"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAddToDo} type="add">
        Add
      </Button>
      <Button onClick={handleRemoveCompleted} type="remove">
        Remove
      </Button>
    </form>
  );
}

export default AddToDo;
