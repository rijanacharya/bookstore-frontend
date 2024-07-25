import React from 'react'
import NavigationBar from '../components/navigationBar';
import SideBar from '../components/sideBar';
interface Book {
    id: number;
    name: string;
    author: string;
}

const BooksPage = async () => {
    // const res = await fetch('http://localhost:8090/api/v1/student',{cache: 'no-store'});
    // const Books: Book[] = await res.json();
    return (
        <>
        <NavigationBar/>
        <SideBar/>
            <h1>Books</h1>
            <p> {new Date().toLocaleTimeString()}</p>
            {/* <ul>
                {Books.map((Book) => (
                    <li key={Book.id}>
                         <hr/>
                        {Book.name} <hr/>{Book.author}
                        </li>
                ))}
            </ul> */}
            
        </>
    )
}

export default BooksPage
