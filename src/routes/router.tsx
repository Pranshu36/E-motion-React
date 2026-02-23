import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary';
import NotFound from '../components/NotFound';
import AuthLayout from '../features/auth/layouts/AuthLayout';
import LoginPage from '../features/auth/pages/LoginPage';
import SignupPage from '../features/auth/pages/SignupPage';
import BlogPage from '../features/blog/pages/BlogPage';
import ContactPage from '../features/contactPage/pages/ContactPage';
import HomePage from '../features/homepage/pages/HomePage';
// import SchedulePickup from '../features/schedulePickup/pages/SchedulePickup';
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
      {
        path: ROUTE.CONTACT,
        element: <ContactPage />,
      },
      {
        path: ROUTE.BLOG,
        element: <BlogPage />,
      },
      // {
      //   path: ROUTE.pickup,
      //   element: <SchedulePickup />,
      // },
      {
        path: ROUTE.AUTH.INDEX,
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE.AUTH.LOGIN,
            element: <LoginPage />,
          },
          {
            path: ROUTE.AUTH.SIGNUP,
            element: <SignupPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
