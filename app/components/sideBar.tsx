'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const SideBar = () => {
    const [isFictionOpen, setIsFictionOpen] = useState(false);
    const [isNonfictionOpen, setIsNonfictionOpen] = useState(false);

    const toggleFiction = () => setIsFictionOpen(!isFictionOpen);
    const toggleNonfiction = () => setIsNonfictionOpen(!isNonfictionOpen);

    return (
        <nav className="bg-gray-800 text-white fixed h-full z-50 hidden md:block">
            <div className="flex flex-col h-full p-4">
                <h2 className="text-white font-bold">Categories</h2>
                <ul>
                    <li className="cursor-pointer flex items-center" onClick={toggleFiction}>
                        Fiction
                        {isFictionOpen ? <span className="ml-2">-</span> : <span className="ml-2">+</span>}
                    </li>
                    <div className={`transition-all duration-300 overflow-hidden ${isFictionOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <ul>
                            <li><Link href="/category/fiction/science-fiction">Science Fiction</Link></li>
                            <li><Link href="/category/fiction/fantasy">Fantasy</Link></li>
                            {/* ... other fiction subcategories */}
                        </ul>
                    </div>
                    <li className="cursor-pointer flex items-center" onClick={toggleNonfiction}>
                        Nonfiction
                        {isNonfictionOpen ? <span className="ml-2">-</span> : <span className="ml-2">+</span>}
                    </li>
                    <div className={`transition-all duration-300 overflow-hidden ${isNonfictionOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <ul>
                            <li><Link href="/category/nonfiction/history">History</Link></li>
                            <li><Link href="/category/nonfiction/biography">Biography</Link></li>
                            {/* ... other nonfiction subcategories */}
                        </ul>
                    </div>
                    {/* ... other major categories */}
                </ul>
                <h2 className="text-white font-bold mt-4">Featured</h2>
                {/* ... featured books or other content */}
            </div>
        </nav>
    );
};

export default SideBar;
