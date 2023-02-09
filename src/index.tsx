import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { LogInPage } from './pages/login';
import { SingUpPage } from './pages/singup';
import { ViewInvoicePage } from './pages/viewInvoice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Switch>
        <Route  path="/singup" component={SingUpPage} />
        <Route  path='/view' component={ViewInvoicePage} />
        <Route  path="/" component={LogInPage} />
      </Switch>
    </ThemeProvider>
  </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
