// Import SingleBook component
import SingleBook from '../components/SingleBook';
import { Book } from '../components/SingleBook';

// Import next/link and getServerSideProps
import Link from 'next/link';

interface AllBooksProps {
  books: Book[];
}

async function getData() {
  const res = await fetch('http://localhost:8090/api/v1/book/books')
  const books = await res.json()
  const booksWithImages = books.map((book: Book) => ({
    ...book,
    imageUrl: `http://localhost:8090/api/v1/book/books/${book.id}/image`
  }))

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  return booksWithImages
}

export default async function Page() {
  const books = await getData()

  return (
    <div>
      <h1>All Books</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book: Book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            <SingleBook book={book} />
          </Link>
        ))}

      </div>
    </div>
  )
}



