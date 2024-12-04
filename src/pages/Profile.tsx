import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    isAuthenticated && (
      <div className="flex items-center gap-4 p-4 bg-white shadow rounded">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
