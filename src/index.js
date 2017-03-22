import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
  body {
    display: flex;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 20px;
    overflow: hidden;
  }
  #root {
    flex: 1;
  }
`

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
