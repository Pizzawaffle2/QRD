// src/pages/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to QR Direct!</h1>
        <p className="text-gray-600 mb-6">
          Simplify your QR code generation and management.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/dashboard"
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded shadow"
          >
            Dashboard
          </a>
          <a
            href="/login"
            className="px-6 py-2 text-gray-800 bg-white border hover:bg-gray-100 rounded shadow"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
