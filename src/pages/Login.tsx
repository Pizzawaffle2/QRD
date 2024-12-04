import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ id: '1', name: 'Jane Doe', email: 'jane.doe@example.com' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
