import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
