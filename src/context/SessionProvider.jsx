import React, { useContext, createContext, useState } from 'react';
import { fetchToken } from '../services/requests';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export default function SessionProvider({ children }) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ loginError, setLoginError ] = useState(false);
  const [ userToken, setUserToken ] = useState(() =>
    JSON.parse(window.localStorage.getItem('userToken') || null),
  );

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
    // setIsLogged(false);
  };

  const signIn = async (values, callback) => {
    setIsLoading(true);
    const authToken = await fetchToken(values);
    if (Object.keys(authToken)[0] === 'token') {
      storeToken(authToken.token);
      callback();
      setIsLoading(false);
    }
    else {
      setLoginError(true);
      setIsLoading(false);
    }
  };

  return (
    <SessionContext.Provider
      value = {{
        storeToken,
        removeToken,
        userToken,
        signIn,
        setLoginError,
        loginError,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}