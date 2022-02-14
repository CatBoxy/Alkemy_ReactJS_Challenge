import React from 'react';
import './App.css';
import SessionProvider from './context/SessionProvider.jsx';
import MyRoutes from './MyRoutes.jsx';
import GlobalHeader from './components/GlobalHeader/GlobalHeader.jsx';
import MenuProvider from './context/MenuProvider';

function App() {

  return (
    <SessionProvider>
      <MenuProvider>
        <div className="App">
          <div className="mainContent">
            <GlobalHeader />
            <MyRoutes />
          </div>
          <div className="overlay"/>
        </div>
      </MenuProvider>
    </SessionProvider>
  );
}

export default App;
