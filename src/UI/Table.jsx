import styled from "styled-components";
import TableRow from "./TableRow";
import { device } from "../styles/devices";
import Loader from "./Loader";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

/* eslint react/prop-types: 0 */

const StyledTable = styled.table`
  width: 100%;
  margin-top: 4rem;
`;
const Thead = styled.thead`
  background-color: var(--color-bg);
`;

const Th = styled.th`
  padding: 1rem;
  font-size: 1.6rem;
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

function Table({ isLoading }) {
  const { state } = useContext(TodoContext);
  const { sortedValue } = state;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <StyledTable>
          <Thead>
            <tr>
              <Th>Task</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </Thead>
          <tbody>
            {sortedValue?.length === 0 && <TableRow todos={false} />}
            {sortedValue &&
              sortedValue?.map((todo) => (
                <TableRow key={todo.id} todos={todo} />
              ))}
          </tbody>
        </StyledTable>
      )}
    </>
  );
}

export default Table;
