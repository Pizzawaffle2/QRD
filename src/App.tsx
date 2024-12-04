import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/ui/header';

// Pages
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import UserManagement from '@/pages/admin/UserManagement';
import AdvancedAnalytics from '@/pages/analytics/Advanced';
import Settings from '@/pages/settings/Settings';
import LinkManagement from '@/pages/links/LinkManagement';
import CustomizeQRCode from '@/pages/qrcodes/Customize';
import CalendarManagement from '@/pages/calendar/Manage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/analytics/advanced" element={<AdvancedAnalytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/links/manage" element={<LinkManagement />} />
        <Route path="/qrcodes/customize" element={<CustomizeQRCode />} />
        <Route path="/calendar/manage" element={<CalendarManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
