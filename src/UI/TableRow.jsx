import styled from "styled-components";
import Button from "./Button";
import useDeleteToDo from "../hooks/useDeleteToDo";
import useUpdateToDo from "../hooks/useUpdateToDo";
import { device } from "../styles/devices";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  HiMiniPencilSquare,
  HiMiniArchiveBoxXMark,
  HiXCircle,
  HiCheckCircle,
} from "react-icons/hi2";

/* eslint react/prop-types: 0 */

const StyledTd = styled.td`
  background-color: var(--color-task);
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.6rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

function TableRow({ todos }) {
  console.log(todos);
  const { id: todoId, todo, date, status } = todos;

  const { editDataDispatch } = useContext(TodoContext);

  const { deleteToDo, isDeleting } = useDeleteToDo();
  const { updateToDo, isUpdating } = useUpdateToDo();

  const isWorking = isDeleting || isUpdating;

  function handleDelete(todoId) {
    deleteToDo(todoId);
  }

  function handleUpdateStatus(data) {
    const editedStatus = status === "Pending" ? "Done" : "Pending";
    data = { ...data, status: editedStatus };
    updateToDo({ data });
  }

  function handleEdit() {
    editDataDispatch(todos);
  }

  return (
    <tr>
      {!todos && <StyledTd colSpan={4}>No Task Found!</StyledTd>}
      {todos && (
        <>
          <StyledTd>{todo}</StyledTd>
          <StyledTd>{date}</StyledTd>
          <StyledTd>{status}</StyledTd>
          <StyledTd>
            <Button
              variation={"warning"}
              size={"small"}
              disabled={isWorking}
              title="Edit"
              onClick={handleEdit}
            >
              <HiMiniPencilSquare />
            </Button>
            <Button
              disabled={isWorking}
              variation={"success"}
              size={"small"}
              title={status === "Done" ? "Undo" : "Mark as Done"}
              onClick={() => handleUpdateStatus(todos)}
            >
              {status === "Done" ? <HiXCircle /> : <HiCheckCircle />}
            </Button>
            <Button
              disabled={isWorking}
              variation={"error"}
              size={"small"}
              title="Delete"
              onClick={() => handleDelete(todoId)}
            >
              <HiMiniArchiveBoxXMark />
            </Button>
          </StyledTd>
        </>
      )}
    </tr>
  );
}

export default TableRow;
