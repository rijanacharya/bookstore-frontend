import React from 'react';

export interface Book {
  id: string;
  name: string;
  author: string;
  description: string;
  publishedDate: string;
  reviews: string[];
  imageUrl?: string; // This will hold the URL for the image
}

interface SingleBookProps {
  book: Book;
}

const SingleBook: React.FC<SingleBookProps> = ({ book }) => {
  return (
    <div key={book.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
      <h2>{book.name}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      {/* <p><strong>Reviews:</strong> {book.reviews.join(', ')}</p> */}
      <img
        src={book.imageUrl}
        alt={book.name}
        style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
      />
    </div>
  );
};

export default SingleBook;
