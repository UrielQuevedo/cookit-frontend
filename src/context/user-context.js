import React, { createContext, useEffect, useState } from 'react';
import { me } from 'service/auth-service';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    me().then(response => setUser(response));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div> Cargando...</div>
      ) : (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      )}
    </>
  );
};

export default UserProvider;
