import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../components/NotFound';
import LoginPage from '../features/auth/pages/LoginPage';
import HomePage from '../features/homepage/pages/HomePage';
import MainLayout from '../layouts/MainLayout';

import ProtectedRoute from './ProtectedRoute';
import { ROUTE } from './route';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute requireAuth={false}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: ROUTE.LOGIN,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
