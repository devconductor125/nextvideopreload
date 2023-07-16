"use client"

import { useState, FormEvent } from 'react';

export default function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const verifyEmailHandler = async (event:FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email, token }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { message } = await response.json();
      // Handle verification error
    } else {
      // Handle successful verification
    }
  };

  return (
    <form onSubmit={verifyEmailHandler}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Token" />
      <button type="submit">Verify Email</button>
    </form>
  );
}
