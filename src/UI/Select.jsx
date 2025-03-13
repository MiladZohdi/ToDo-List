import styled from "styled-components";
import { device } from "../styles/devices";

const Select = styled.select`
  border: none;
  font-size: 1.6rem;
  padding-left: 1rem;

  cursor: pointer;
  border-radius: 0.5rem;
  background-color: var(--color-primary);

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

Select.defaultProps = {
  variation: "primary",
  size: "mid",
};

export default Select;
