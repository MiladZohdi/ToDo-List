import { createGlobalStyle, css } from "styled-components";
import { device } from "./devices";

const theme = {
  light: css`
    :root {
      --color-primary: #f9d72f;
      --color-white: #ffffff;
      --color-bg: #e6e6e6;
      --color-task: #f7f7f7;
      --color-success: #36d39a;
      --color-warning: #fbbe23;
      --color-error: #f87171;
      --color-font: #121212;
      --color-shadow: rgba(31, 38, 135, 0.3);
    }
  `,
  dark: css`
    :root {
      --color-primary: #fcdb4e;
      --color-white: #282828;
      --color-bg: #3f3f3f;
      --color-task: #575757;
      --color-success: #59d8a5;
      --color-warning: #fec545;
      --color-error: #fb8280;
      --color-font: #f3f3f3;
      --color-shadow: rgba(150, 144, 147, 0.1);
    }
  `,
};

const GlobalStyle = createGlobalStyle`
  ${(props) => theme[props.theme] || theme.light}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
html{
  font-size: 62.5%;
  color: var(--color-font);
  background-color: var(--color-white);
  transition: background-color 0.3s ease, color 0.3s ease;
}
  @media ${device.laptop} {
    html{
      font-size: 55%;
      }
    }

    
  @media ${device.tabletL} {
    html{
      font-size: 50%;
      }
    }


    @media ${device.tablet} {
    html{
      font-size: 35%;
      }
    }

`;

export default GlobalStyle;
