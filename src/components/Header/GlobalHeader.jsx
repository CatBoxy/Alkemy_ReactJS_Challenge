import React from 'react';
import { useSession } from '../../context/SessionProvider';

function GlobalHeader() {
  const { removeToken, isLogged } = useSession();
  const isLoggedListener = (state) => {
    if (state) {
      return <button onClick={removeToken}> Logout </button>;
    }
    else {
      return <h1> Header </h1>;
    }
  };
  return (
    <>
      {isLoggedListener(isLogged)}
    </>
  );
}

export default GlobalHeader;