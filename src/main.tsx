import { ThemeProvider } from '@material-tailwind/react';
import 'highlight.js/styles/github-dark.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import AppRoutes from './src/routes/Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <>
        <ToastContainer theme="colored" />
        <AppRoutes />
      </>
    </ThemeProvider>
  </StrictMode>
);
