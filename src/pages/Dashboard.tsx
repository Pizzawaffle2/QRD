import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat-card">
          <h3 className="text-lg font-semibold">Total QR Codes</h3>
          <p className="text-4xl font-bold text-blue-500">25</p>
        </div>
        <div className="stat-card">
          <h3 className="text-lg font-semibold">Total Scans</h3>
          <p className="text-4xl font-bold text-green-500">120</p>
        </div>
        <div className="stat-card">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-4xl font-bold text-yellow-500">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
