'use client';
import { useState } from 'react';

export default function PostData() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    author: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8090/api/v1/student/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Data posted successfully');
      // Handle success, e.g., clear form, show success message
    } else {
      console.error('Error posting data:', response.statusText);
      // Handle error, e.g., show error message
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}  >
      <input type="text" name="id" value={formData.id} onChange={handleChange} />
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="author" value={formData.author} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
