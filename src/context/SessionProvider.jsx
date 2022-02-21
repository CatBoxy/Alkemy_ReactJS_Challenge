import React, { useContext, createContext, useState } from 'react';
import { fetchToken } from '../services/requests';

const sessionContext = createContext();

export const useSession = () => useContext(sessionContext);

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
  };

  const logIn = async (values, callback) => {
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
    <sessionContext.Provider
      value = {{
        storeToken,
        removeToken,
        userToken,
        logIn,
        setLoginError,
        loginError,
        isLoading,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}