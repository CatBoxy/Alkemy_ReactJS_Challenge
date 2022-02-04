import React from 'react';
import './App.css';
import SessionProvider from './context/SessionProvider.jsx';
import MyRoutes from './MyRoutes.jsx';
import GlobalHeader from './components/Header/GlobalHeader.jsx';

function App() {

  return (
    <SessionProvider>
      <div className="App">
        <GlobalHeader />
        <MyRoutes />
      </div>
    </SessionProvider>
  );
}

export default App;
