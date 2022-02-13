import React from 'react';
import './App.css';
import SessionProvider from './context/SessionProvider.jsx';
import MyRoutes from './MyRoutes.jsx';
import GlobalHeader from './components/GlobalHeader.jsx';
import MenuProvider from './context/MenuProvider';

function App() {

  return (
    <SessionProvider>
      <MenuProvider>
        <div className="App">
          <GlobalHeader />
          <MyRoutes />
        </div>
      </MenuProvider>
    </SessionProvider>
  );
}

export default App;
