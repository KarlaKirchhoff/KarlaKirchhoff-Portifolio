import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index';
import CurriculoPage from './pages/CurriculoPages/Index';
import NotFoundPage from './pages/NotFound';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurriculoPage />
  </React.StrictMode>
);
