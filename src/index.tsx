import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './theme/globalstyle'

import App from './App';

ReactDOM.render(
  <BrowserRouter>
   <GlobalStyle />
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);
