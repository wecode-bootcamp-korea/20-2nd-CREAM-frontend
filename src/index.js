import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Store from '../src/store/Store';

ReactDOM.render(
  <Store>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Store>,
  document.getElementById('root')
);
