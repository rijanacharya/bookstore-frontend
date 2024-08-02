'use client';
import React, { useState } from 'react';
import NavigationBar from '../components/navigationBar';
import Footer from '../components/footerBar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
