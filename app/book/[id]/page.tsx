
interface Book {
  id: number;
  name: string;
  author: string;
}

export default async function Page({ params }: { params: { id: number } }) {

  const res = await fetch('http://localhost:8090/api/book/'+params.id,{cache: 'no-store'});
    const book: Book = await res.json();

 
  return (
    <div>
    <ul>
      <li>{book.id} </li>
      <li>{book.name}</li>
      <li>{book.author}</li>
    </ul>
</div>
  )

}