export type User = {
    id: string;
    name: string;
    email: string;
};

export type AuthContextType = {
    user: User | null;
    login: (user: User) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
    error: Error | null;
};
  