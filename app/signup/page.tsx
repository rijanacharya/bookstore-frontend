'use client';
import React, { useState } from 'react';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., validate data and send to backend)
    console.log('Signup form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        name="name"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        className="border border-gray-300 p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
