import React, { useState } from 'react';
import { QRCode } from 'qrcode.react';

const QRGenerator = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="block w-full mb-4 p-2 border rounded"
      />
      {url && (
        <div className="mt-4">
          <QRCode value={url} />
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
