'use client';
import React from 'react';
import NavigationBar from '../components/navigationBar';
import SideBar from '../components/sideBar';
import TestPage from '../components/testPage';
import Footer from '../components/footerBar';

const BooksPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />
            <div className="flex-grow flex">
                <main className="flex-grow p-4 ml-0 md:ml-64">
                    <TestPage />
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Books</h1>
                        <p>Current Time: {new Date().toLocaleTimeString()}</p>
                        {/* Uncomment the following section when API is ready */}
                        {/* <ul>
                            {Books.map((Book) => (
                                <li key={Book.id}>
                                    <hr/>
                                    {Book.name} <hr/>{Book.author}
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default BooksPage;
