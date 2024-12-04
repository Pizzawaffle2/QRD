import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'QR Code Scans',
      data: [10, 50, 30, 70, 40],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const AdvancedAnalytics = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Advanced Analytics</h1>
      <Line data={data} />
    </div>
  );
};

export default AdvancedAnalytics;
