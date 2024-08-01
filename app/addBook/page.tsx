'use client';
import React from 'react';
import AddBookForm from '../components/AddBookForm';

const App: React.FC = () => {
    return (
        <div>
            <h1>Add a New Book</h1>
            <AddBookForm />
        </div>
    );
};

export default App;