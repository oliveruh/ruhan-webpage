import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppRouter from './Router';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);