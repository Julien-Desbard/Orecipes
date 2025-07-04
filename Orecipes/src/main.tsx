
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
