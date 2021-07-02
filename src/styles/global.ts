import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    scroll-behavior: smooth;
    overflow-y: hidden;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: ${theme.font.family}, sans-serif;
    font-size: ${theme.font.sizes.paragraph};
  }

  h1 {
    font-size: ${theme.font.sizes.title};
  }

  h2, h3 {
    font-size: ${theme.font.sizes.subtitle};
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
