import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { fetchAnalyticsData } from '@/lib/mockApi';

const Analytics: React.FC = () => {
  const [data, setData] = useState<{ scans: number[]; clicks: number[] } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchAnalyticsData();
      setData(result as { scans: number[]; clicks: number[] });
    };

    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const barData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'QR Code Scans',
        data: data.scans,
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3'],
    datasets: [
      {
        label: 'Link Clicks',
        data: data.clicks,
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">QR Code Scans</h2>
          <Bar data={barData} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Link Clicks</h2>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
