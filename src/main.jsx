import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prevent browser from restoring scroll position on refresh/back-navigation
window.history.scrollRestoration = 'manual';

// On every load, immediately snap to the top before React renders
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
