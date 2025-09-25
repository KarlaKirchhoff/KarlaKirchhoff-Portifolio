import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';
import NotFoundPage from './pages/NotFound';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotFoundPage />
  </React.StrictMode>
);
