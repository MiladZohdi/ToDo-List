import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlight } from "react-icons/md";

const StyledLabel = styled.label`
  margin-top: 2rem;
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--color-primary);
  }
  &:focus + span {
    outline: none;
    border-width: 2px;
  }

  &:checked + span:before {
    -webkit-transform: translateX(2.6rem);
    -ms-transform: translateX(2.6rem);
    transform: translateX(2.6rem);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 2.6rem;
    width: 2.6rem;
    left: 0.4rem;
    bottom: 0.4rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & {
    border-radius: 34px;
  }

  &:before {
    border-radius: 50%;
  }

  & svg {
    position: absolute;
    color: #000;
    top: 50%;
    left: 27%;
    transform: translate(-50%, -50%);
    height: 1.8rem;
    width: 1.8rem;
    z-index: 111;
  }
`;

/* eslint react/prop-types: 0 */

function Switch({ toggleTheme, theme }) {
  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        checked={(theme === "dark" && true) || (theme == "light" && false)}
        onChange={toggleTheme}
      />

      <StyledSpan theme={theme}>
        {theme === "dark" ? <WiDaySunny /> : <MdNightlight />}
      </StyledSpan>
    </StyledLabel>
  );
}

export default Switch;
