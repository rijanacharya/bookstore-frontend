
import React from 'react';
import {Book} from '../../components/SingleBook';

export default async function Page({ params }: { params: { id: number } }) {


  // const bookWithImages = books.map((book :Book) => ({
  //   ...book,
  //   imageUrl: `http://localhost:8090/api/v1/book/books/${book.id}/image`
  // }))
  const res = await fetch('http://localhost:8090/api/v1/book/books/'+params.id,{cache: 'no-store'});
  const book1 = await res.json();
  
  const book : Book = {
    ...book1,
  imageUrl: 'http://localhost:8090/api/v1/book/books/' + params.id + '/image'
  }

  return (
    <>
    <div key={book.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
      <h2>{book.name}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      <p><strong>Reviews:</strong> {book.reviews.join(', ')}</p>
      <img
        src={book.imageUrl}
        alt={book.name}
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
    </>
  )

}