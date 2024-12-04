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
        {/* Home and Dashboard */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin */}
        <Route path="/admin/user-management" element={<UserManagement />} />

        {/* Analytics */}
        <Route path="/analytics/advanced" element={<AdvancedAnalytics />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Links */}
        <Route path="/links/manage" element={<LinkManagement />} />

        {/* QR Codes */}
        <Route path="/qrcodes/customize" element={<CustomizeQRCode />} />

        {/* Calendar */}
        <Route path="/calendar/manage" element={<CalendarManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
