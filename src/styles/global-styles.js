import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0A1128;
    --secondary-color: #dc143c;
    --white: #FFFFFF;
    --light-gray-color: #EEEEEE;
    --gray: gray;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${'var(--primary-color)'};
  }
`;
