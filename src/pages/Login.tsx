// src\pages\Login.tsx

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md text-center">
        {!isAuthenticated ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome!</h2>
            <button
              type="button"
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
