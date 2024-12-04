import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl">QR Direct</h1>
        <div>
          <Link to="/" className="mr-4 hover:text-blue-300">Home</Link>
          <Link to="/dashboard" className="mr-4 hover:text-blue-300">Dashboard</Link>
          <Link to="/qr-generator" className="mr-4 hover:text-blue-300">QR Generator</Link>
          <Link to="/analytics/advanced" className="hover:text-blue-300">Analytics</Link>
        </div>
      </nav>
    </header>
  );
};
