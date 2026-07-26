import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      token,
      user,
      login: (payload) => {
        setToken(payload.token);
        setUser(payload.user);
      },
      logout: () => {
        setToken('');
        setUser(null);
      }
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
