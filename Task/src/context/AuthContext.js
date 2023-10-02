import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [user, setUser] = useState({
    name: 'User',
    email: 'user@example.com',
  });

  return (
    <AuthContext.Provider value={{ registeredUser, setRegisteredUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);