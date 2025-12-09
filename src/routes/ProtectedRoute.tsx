import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../features/auth/AuthProvider';

import { ROUTE } from './route';

type ProtectedRouteProps = {
  requireAuth?: boolean;
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requireAuth = true,
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!requireAuth) return children;

  if (isAuthenticated) return children;

  return <Navigate to={ROUTE.LOGIN} state={{ from: location }} replace />;
};

export default ProtectedRoute;
