import React, { useContext, createContext, useState, useEffect } from 'react';
import { fetchToken } from '../services/requests';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export default function SessionProvider({ children }) {

  const [ isLogged, setIsLogged ] = useState(false);
  const [ loginError, setLoginError ] = useState(false);
  const [ userToken, setUserToken ] = useState(() =>
    JSON.parse(window.localStorage.getItem('userToken') || null),
  );

  useEffect(() => {
    if (userToken !== null) {
      setIsLogged(true);
    }
  }, [ userToken ]);

  const storeToken = (token) => {
    try {
      const jsonValue = JSON.stringify(token);
      window.localStorage.setItem('userToken', jsonValue);
      setUserToken(token);
    }
    catch (e) {
      console.log(e);
    }
  };

  const removeToken = () => {
    window.localStorage.removeItem('userToken');
    setUserToken(null);
    setIsLogged(false);
  };

  const signIn = async (values, callback) => {
    const authToken = await fetchToken(values);
    if (Object.keys(authToken)[0] === 'token') {
      storeToken(authToken.token);
      callback();
    }
    else {
      setLoginError(true);
    }
  };

  return (
    <SessionContext.Provider
      value = {{
        storeToken,
        removeToken,
        userToken,
        signIn,
        isLogged,
        setLoginError,
        loginError,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}