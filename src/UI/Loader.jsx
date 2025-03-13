import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% { transform: rotate(1turn); }
`;

const orbit = keyframes`
  100% { transform: rotate(1turn) translate(150%); }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-primary);
  display: grid;
  animation: ${rotate} 2s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 15%;
    border-radius: 50%;
    background: inherit;
    transform: rotate(0deg) translate(150%);
    animation: ${orbit} 1s infinite;
  }

  &::after {
    animation-delay: -0.5s;
  }
`;

export default Loader;
