import React from 'react';
import { Icon } from './Icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#000814] p-4">
          <div className="glass p-8 rounded-2xl border border-white/5 max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
              <Icon name="alert" size={32} className="text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Something Went Wrong</h2>
            <p className="text-white/60 text-sm mb-6">
              Don't worry - this section encountered an error but the rest of the portfolio is working fine.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
