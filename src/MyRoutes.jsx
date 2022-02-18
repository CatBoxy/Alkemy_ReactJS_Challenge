import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import RequireAuth from './components/RequireAuth';
import DishesPage from './screens/DishesPage';
import NotFound from './screens/NotFound';

function MyRoutes() {

  return (
    <Routes>
      <Route
        exact path="/"
        element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <RequireAuth>
            <LoginPage/>
          </RequireAuth>
        } />
      <Route
        path="/dishes"
        element= {
          <RequireAuth>
            <DishesPage/>
          </RequireAuth>
        }
      />
      <Route
        path="*"
        element= {
          <RequireAuth>
            <NotFound/>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default MyRoutes;