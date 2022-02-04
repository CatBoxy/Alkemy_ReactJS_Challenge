import React from 'react';
import { useSession } from '../../context/SessionProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { isLogged } = useSession();
  const location = useLocation();
  const childrenComponent = children.type.name;

  if ((childrenComponent === 'LoginPage') && isLogged) {
    return <Navigate to="/" replace/>;
  }

  if (childrenComponent !== 'LoginPage' && !isLogged) {
    // Redirect to /login page, but save the current location they were trying to go to when the where redirected
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }
  return (
    children
  );
}
