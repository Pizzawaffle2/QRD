import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            signIn('credentials', { email, password });
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block w-full mb-3 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
