import React from 'react';
import { useSession } from '../context/SessionProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { userToken } = useSession();
  const location = useLocation();

  // Redirect to /login page, but save the current location they were trying to go to when they where redirected
  return userToken ? children : <Navigate to="/login" state={{ from: location }} replace/>;
}
