import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">QR Direct</Link>
        </h1>
        <div className="flex items-center space-x-4">
          {isAuthenticated && <span>Welcome, {user?.name}!</span>}
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-300">
                Dashboard
              </Link>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="hover:text-green-500"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
