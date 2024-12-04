import React, { createContext, useContext, useState } from 'react';

interface UserContextProps {
  user: { name: string; role: string } | null;
  setUser: (user: { name: string; role: string } | null) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

