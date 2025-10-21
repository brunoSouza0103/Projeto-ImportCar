import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // <-- certifique-se que esse caminho existe

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

