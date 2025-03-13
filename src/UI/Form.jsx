import styled from "styled-components";
import { device } from "../styles/devices";
import { useForm } from "react-hook-form";
import useAddToDo from "../hooks/useAddToDo";
import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";
import useUpdateToDo from "../hooks/useUpdateToDo";
import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";

/* eslint react/prop-types: 0 */

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media ${device.mobileL} {
    flex-direction: column;
    row-gap: 1.6rem;
  }

  & > button + button {
    margin-left: 1rem;
  }
`;

function Form() {
  const { state, editDoneDispatch } = useContext(TodoContext);

  const { isEditing, editData } = state;
  const { id: editId, created_at } = editData;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { todo: "", date: "" },
  });

  useEffect(() => {
    if (isEditing) {
      reset(editData);
    } else {
      reset({ todo: "", date: "" });
    }
  }, [editData, reset, isEditing]);

  const { addToDo, isAdding } = useAddToDo();
  const { updateToDo, isUpdating } = useUpdateToDo();

  const isWorking = isAdding || isUpdating;

  function onSubmit(data) {
    editDoneDispatch();
    !isEditing
      ? addToDo(data, {
          onSuccess: () => {
            reset();
          },
        })
      : updateToDo(
          { data: { id: editId, created_at, ...data } },
          {
            onSuccess: () => {
              reset("");
            },
          }
        );
  }

  function onError(error) {
    error?.todo?.message && toast.error(error.todo.message);
    error?.date?.message && toast.error(error.date.message);
  }

  function handleCancelDelete() {
    editDoneDispatch();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        name="todo"
        type="text"
        placeholder="Add a todo here ..."
        disabled={isWorking}
        {...register("todo", { required: "Todo can't be empty" })}
      />
      <Input
        name="date"
        type="date"
        disabled={isWorking}
        {...register("date", { required: "date can't be empty" })}
      />
      <Button disabled={isWorking}>{!isEditing ? "Add" : "Edit"}</Button>
      {isEditing && (
        <Button
          type="button"
          variation={"error"}
          disabled={isWorking}
          onClick={handleCancelDelete}
        >
          Cancel
        </Button>
      )}
    </StyledForm>
  );
}

export default Form;
