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
        path="/"
        element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
        }
      />
      <Route
        path='/login'
        element={
          <LoginPage/>
        } />
      <Route
        path='/dishes'
        element= {
          <RequireAuth>
            <DishesPage/>
          </RequireAuth>
        }
      />
      <Route
        path='*'
        element= {
          <NotFound/>
        }
      />
    </Routes>
  );
}

export default MyRoutes;