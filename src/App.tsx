import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignIn } from './components/login';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import { Waves } from './components/waves';
import { AppRoutes } from './routes';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />

    <AppRoutes />
    </ThemeProvider> 
    </>
  );
}

export default App;
