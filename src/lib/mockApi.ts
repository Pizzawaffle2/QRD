export const fetchAnalyticsData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          scans: [40, 60, 80],
          clicks: [20, 40, 60],
        });
      }, 1000);
    });
  };
  