import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    checkAuth(setAuthState);
    setLoading(false);
  }, []);

  const setAuth_ = action => reducer(setAuthState, action);

  return [loading, authState, setAuth_];
};

const AuthProvider = ({ children }) => {
  const pathname = window.location.pathname;
  const toCheckPathnames = ['/login'];
  const { push } = useHistory();
  const [loading, authState, setAuth_] = useAuth();

  const handlerComponent = () => {
    if (!authState.isAuth && !toCheckPathnames.includes(pathname))
      push('/login');
    return children;
  };

  return (
    <>
      {loading ? (
        <div>Cargando ...</div>
      ) : (
        <AuthContext.Provider value={{ authState, setAuth: setAuth_ }}>
          {handlerComponent()}
        </AuthContext.Provider>
      )}
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;
