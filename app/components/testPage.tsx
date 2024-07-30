'use client';
import React from 'react';

const TestPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex">

                <main className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Main Content</h1>
                    <p>Here is the main content of the page.</p>
                </main>
            </div>
        </div>
    );
};

export default TestPage;
