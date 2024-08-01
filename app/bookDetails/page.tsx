'use client';
import React from 'react';
import BookDetails from '../components/BookDetails';

const BookPage: React.FC = () => {
    const bookId = 'some-book-id'; // Replace with actual book ID or fetch from URL params

    return (
        <div>
            <BookDetails bookId={bookId} />
        </div>
    );
};

export default BookPage;
