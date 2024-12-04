import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/authContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: 'John Doe' }); // Mock login
    navigate('/dashboard');
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
