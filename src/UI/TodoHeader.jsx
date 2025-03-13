import styled from "styled-components";

const StyledTodoHeader = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 3rem;
`;

function TodoHeader() {
  return <StyledTodoHeader>Todo App</StyledTodoHeader>;
}

export default TodoHeader;
