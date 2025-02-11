'use client'

import { useState } from 'react';

export default function SendNewsletter() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendNewsletter = async () => {
    setStatus('Sending...');
    setError(null);
    try {
      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'test-user-id',
          email: 'your-personal-email@example.com', // Replace with your actual email
          preferences: ['article', 'video', 'podcast']
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('Newsletter sent successfully!');
      } else {
        setError(`Failed to send newsletter: ${data.message}`);
        setStatus(null);
      }
    } catch (error) {
      console.error('Error sending newsletter:', error);
      setError('An error occurred while sending the newsletter.');
      setStatus(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Send Newsletter</h1>
      <button 
        onClick={handleSendNewsletter}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Generate and Send Newsletter
      </button>
      {status && <p className="mt-4 text-green-600">{status}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}