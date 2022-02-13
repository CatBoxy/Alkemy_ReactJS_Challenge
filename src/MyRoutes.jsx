import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import DishPage from './screens/DishPage';
import LoginPage from './screens/LoginPage';
import RequireAuth from './components/RequireAuth';
import DishesPage from './screens/DishesPage';

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
        path="/dish"
        element= {
          <RequireAuth>
            <DishPage/>
          </RequireAuth>
        }
      />
      <Route
        path="/dishes"
        element= {
          <RequireAuth>
            <DishesPage/>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default MyRoutes;