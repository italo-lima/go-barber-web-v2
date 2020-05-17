import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    border: 0;
  }
`;
