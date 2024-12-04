import React from 'react';

const StatisticsWidget: React.FC<{ title: string; value: number }> = ({
  title,
  value,
}) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default StatisticsWidget;
