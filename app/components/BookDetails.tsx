'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
    id: string;
    title: string;
    author: string;
    // Add other fields you want to display
}

const BookDetails: React.FC<{ bookId: string }> = ({ bookId }) => {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:8090/api/v1/book/books/${bookId}`);
                setBook(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching book:', error);
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookId]);

    if (loading) return <div>Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
    {/* Display other book details here */}
    </div>
);
};

export default BookDetails;
