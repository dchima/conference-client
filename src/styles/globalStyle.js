import { createGlobalStyle } from 'styled-components';
import Basics from './basics';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFFEFC;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  color: ${Basics.colors.solidBlue};
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${Basics.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Basics.colors.fadedBlue};
    outline: 0;
  }

  p {
    font-size: 13px;
    color: ${Basics.colors.chalkBlue};
    font-weight: 900;
    word-spacing: 2px;

  }
}
`;

export default GlobalStyle;
