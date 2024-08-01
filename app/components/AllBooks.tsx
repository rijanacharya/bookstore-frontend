'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
    id: string;
    name: string;
    author: string;
    description: string;
    publishedDate: string;
    reviews: string[];
    imageUrl?: string; // This will hold the URL for the image
}

const AllBooks: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Fetch all books
        fetch('http://localhost:8090/api/v1/book/books')
            .then((response) => response.json())
            .then((data) => {
                // Map book ids to image URLs
                const booksWithImages = data.map((book: Book) => ({
                    ...book,
                    imageUrl: `http://localhost:8090/api/v1/book/books/${book.id}/image`, // URL to fetch the image
                }));
                setBooks(booksWithImages);
            });
    }, []);

    return (
        <div>
            <h1>All Books</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {books.map((book) => (
                    <div key={book.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                        <h2>{book.name}</h2>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p>{book.description}</p>
                        <p><strong>Published Date:</strong> {book.publishedDate}</p>
                        <p><strong>Reviews:</strong> {book.reviews.join(', ')}</p>
                        <img
                            src={book.imageUrl}
                            alt={book.name}
                            style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
