import styled from "styled-components";
import Button from "./Button";
import useDeleteToDo from "../hooks/useDeleteToDo";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Select from "./Select";

const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function ButtonsContainer() {
  const { deleteToDo } = useDeleteToDo();
  const { showOnlyPendingsDispatch, showAll, sort } = useContext(TodoContext);

  function handleDeleteAll() {
    deleteToDo();
  }

  function handlePendings() {
    showOnlyPendingsDispatch();
  }

  function handleShowAll() {
    showAll();
  }

  function handleSort(e) {
    sort(e.target.value);
  }

  return (
    <StyledButtonsContainer>
      <div style={{ display: "flex", columnGap: "5px" }}>
        <Button onClick={handleShowAll}>All</Button>
        <Button onClick={handlePendings}>Pending</Button>
        <Select defaultValue="sortLatest" onChange={(e) => handleSort(e)}>
          <option value="sortLatest">Sort by latest</option>
          <option value="sortOldest">Sort by oldest</option>
          <option value="sortLatestTask">Sort by latest task</option>
          <option value="sortOldestTask">Sort by furthest task</option>
        </Select>
      </div>
      <Button variation={"error"} onClick={() => handleDeleteAll()}>
        Delete All
      </Button>
    </StyledButtonsContainer>
  );
}

export default ButtonsContainer;
