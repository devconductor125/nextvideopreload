"use client"

import { useState, FormEvent } from 'react';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');

  const resetPasswordHandler = async (event:FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, token, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const { message } = await response.json();
      // Handle password reset error
    } else {
      // Handle successful password reset
    }
  };

  return (
    <form onSubmit={resetPasswordHandler}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Token" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
      <button type="submit">Reset Password</button>
    </form>
  );
}
