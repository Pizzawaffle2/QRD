import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary">Welcome to QR Direct</h1>
      <p className="mt-4 text-gray-700">
        Streamline your QR code generation, analytics tracking, and link management.
      </p>
      <div className="mt-6">
        <a
          href="/dashboard"
          className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-600 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
