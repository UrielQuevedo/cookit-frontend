import React, { useState, createContext, useEffect } from 'react';

import { Redirect } from 'react-router';

const AuthTypes = {
  AUTH: { isAuth: true },
  NOT_AUTH: { isAuth: false }
};

const removeAuth = () => {
  localStorage.removeItem('id');
  sessionStorage.removeItem('id');
};

const setAuth = (isRemember, id) => {
  if (isRemember) {
    localStorage.id = id;
    return;
  }
  sessionStorage.id = id;
};

export const reducer = async (authState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      authState(AuthTypes.AUTH);
      setAuth(action.isRemember, action.id);
      break;
    case 'LOG_OUT':
      authState(AuthTypes.NOT_AUTH);
      removeAuth();
      break;
    default:
      break;
  }
};

const checkAuth = async setAuthState => {
  if (
    localStorage.id ||
    sessionStorage.id ||
    localStorage.getItem('authorization')
  ) {
    setAuthState(AuthTypes.AUTH);
    return;
  }
  setAuthState(AuthTypes.NOT_AUTH);
};

export const AuthContext = createContext();

const useAuth = () => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    checkAuth(setAuthState);
  }, []);

  const setAuth_ = action => reducer(setAuthState, action);

  return [authState, setAuth_];
};

const AuthProvider = ({ children }) => {
  const pathname = window.location.pathname;
  const toCheckPathnames = ['/login'];
  const [authState, setAuth_] = useAuth();

  const handlerComponent = () => {
    if (!authState.isAuth && !toCheckPathnames.includes(pathname))
      return <Redirect to="/login" />;
    return children;
  };

  if (!authState) return null;

  return (
    <AuthContext.Provider value={{ authState, setAuth_ }}>
      {handlerComponent()}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
