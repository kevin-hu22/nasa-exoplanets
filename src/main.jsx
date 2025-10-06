
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className="min-h-screen p-4 md:p-8 font-sans relative z-10">
      <StarfieldBackground />
      <App />
    </div>
    </BrowserRouter>
  </StrictMode>
);
