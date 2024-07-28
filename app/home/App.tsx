// App.tsx
import React from 'react';
import BookList from './components/BookList';
import './styles/home.css';

const App: React.FC = () => {
    return (
        <div>
            <BookList />
        </div>
    );
};

export default App;
