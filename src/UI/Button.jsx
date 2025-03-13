import styled, { css } from "styled-components";
import { device } from "../styles/devices";

const variations = {
  primary: css`
    background-color: var(--color-primary);
  `,
  error: css`
    background-color: var(--color-error);
  `,
  warning: css`
    background-color: var(--color-warning);
  `,
  success: css`
    background-color: var(--color-success);
  `,
};

const size = {
  mid: css`
    padding: 1rem 1.5rem;
  `,
  small: css`
    padding: 0.6rem 1rem;
    margin: 0.2rem 0.5rem;
  `,
};

const Button = styled.button`
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 0.5rem;

  ${(props) => variations[props.variation]}
  ${(props) => size[props.size]}

  &:hover {
    opacity: 0.8;
  }
  svg {
    height: 1.8rem;
    width: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "mid",
};

export default Button;
