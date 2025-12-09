import React from 'react';

import errorLogo from '../assets/error.svg';
import { ROUTE } from '../routes/route';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error } as State;
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error captured by ErrorBoundary:', error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = ROUTE.HOME;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
          <div className='max-w-md w-full p-6 text-center flex flex-col items-center justify-center'>
            <img
              className='w-[70%] max-w-[450px]'
              src={errorLogo}
              alt='Error image'
            />
            <h2 className='text-xl font-bold mb-2'>Something went wrong</h2>
            <p className='mb-4 text-sm text-gray-600'>
              An unexpected error occurred. You can try reloading the page or
              retrying the action.
            </p>
            <div className='flex justify-center gap-3'>
              <button
                onClick={() => window.location.reload()}
                className='px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded'
              >
                Reload
              </button>
              <button
                onClick={this.reset}
                className='px-6 py-2 bg-green-700 text-white rounded cursor-pointer hover:bg-green-800'
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
