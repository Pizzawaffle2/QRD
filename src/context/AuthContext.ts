import React, {
    useState,
    useContext,
    createContext,
    ReactNode,
    useCallback,
    useMemo,
  } from 'react';
  
  type User = {
    id: string;
    name: string;
    email: string;
  };
  
  type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    loading: boolean;
    error: Error | null;
  };
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
  
    const login = useCallback(async (newUser: User) => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call or validation
        setUser(newUser);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Login failed'));
      } finally {
        setLoading(false);
      }
    }, []);
  
    const logout = useCallback(() => {
      setUser(null);
    }, []);
  
    const contextValue = useMemo(
      () => ({
        user,
        login,
        logout,
        loading,
        error,
      }),
      [user, login, logout, loading, error]
    );
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  