import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

// Prevent browser from restoring scroll position on refresh/back-navigation
window.history.scrollRestoration = 'manual';

// On every load, immediately snap to the top before React renders
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
  // Remove the HTML loading spinner once React mounts
  const rootEl = document.getElementById('root');
  const observer = new MutationObserver(() => {
    if (rootEl.children.length > 0) {
      const fb = document.getElementById('fallback');
      if (fb) fb.classList.add('hide');
      observer.disconnect();
    }
  });
  observer.observe(rootEl, { childList: true });
} catch (e) {
  console.error('Failed to mount React app:', e);
  const fb = document.getElementById('fallback');
  if (fb) fb.innerHTML = '<p style="color:#ef4444;font-size:16px">Failed to load</p><p style="color:#94a3b8;font-size:13px">Please try refreshing the page</p>';
}
