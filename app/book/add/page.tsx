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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="border border-gray-300 p-2 rounded" type="text" name="id" placeholder='id' value={formData.id} onChange={handleChange} />
            <input className="border border-gray-300 p-2 rounded" type="text" name="name" placeholder='name' value={formData.name} onChange={handleChange} />
            <input className="border border-gray-300 p-2 rounded" type="text" name="author" placeholder='author' value={formData.author} onChange={handleChange} />
            <button className="bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
        </form>
    );
}
