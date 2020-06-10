import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #191919;
    color: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export default GlobalStyle;
