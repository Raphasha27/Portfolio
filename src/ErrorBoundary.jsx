import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('Portfolio error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0f1a', color: '#fff', flexDirection: 'column', gap: '16px', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>⚠️</div>
          <h2 style={{ color: '#ef4444', fontSize: '20px', fontWeight: '700', margin: 0 }}>Something went wrong</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '400px', lineHeight: '1.6' }}>An unexpected error occurred while loading the portfolio. Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '12px 24px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}
