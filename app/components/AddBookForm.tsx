'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface BookDetails {
    name: string;
    author: string;
    description: string;
    publishedDate: string;
    reviews: string;
}

const AddBookForm: React.FC = () => {
    const [bookDetails, setBookDetails] = useState<BookDetails>({
        name: '',
        author: '',
        description: '',
        publishedDate: '',
        reviews: '',
    });
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', bookDetails.name);
        formData.append('author', bookDetails.author);
        formData.append('description', bookDetails.description);
        formData.append('publishedDate', bookDetails.publishedDate);
        formData.append('reviews', bookDetails.reviews);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('http://localhost:8090/api/v1/book/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Book added successfully!');
            // Optionally reset the form
            setBookDetails({
                name: '',
                author: '',
                description: '',
                publishedDate: '',
                reviews: '',
            });
            setImage(null);
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Book Name"
                value={bookDetails.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={bookDetails.author}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={bookDetails.description}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="publishedDate"
                value={bookDetails.publishedDate}
                onChange={handleChange}
                required
            />
            <textarea
                name="reviews"
                placeholder="Reviews"
                value={bookDetails.reviews}
                onChange={handleChange}
            />
            <input
                type="file"
                onChange={handleImageChange}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBookForm;
