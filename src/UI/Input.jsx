import styled from "styled-components";

const Input = styled.input`
  margin-right: 1rem;
  width: 100%;
  border: var(--color-primary) 1px solid;
  border-radius: 5px;
  padding: 1rem;
  color: grey;
  &:focus {
    outline: none;
    border-width: 2px;
  }
`;

export default Input;
