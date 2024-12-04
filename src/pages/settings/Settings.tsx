import React from 'react';

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Settings</h1>
      <section>
        <h2 className="text-lg">Profile</h2>
        <p>Update your profile information here.</p>
      </section>
      <section>
        <h2 className="text-lg">Notifications</h2>
        <p>Configure your notification preferences.</p>
      </section>
      <section>
        <h2 className="text-lg">API Keys</h2>
        <p>Manage your API keys for integration.</p>
      </section>
    </div>
  );
};

export default Settings;
