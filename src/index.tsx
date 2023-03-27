import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { AuthProvider } from './auth/auth.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { SideBar } from './components/sideBar';
import { UserProvider } from './hooks/useUser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <React.StrictMode>
          <ProSidebarProvider>
        <UserProvider>
        <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div style={{
            position: "absolute",
            width: "100vw"
          }}>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
          <AppRoutes />
        </ThemeProvider>
        </AuthProvider>
        </UserProvider>
          </ProSidebarProvider>
      </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
