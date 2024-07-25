'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navigationBar.module.css';

const sideBar = () => {
  const [isFictionOpen, setIsFictionOpen] = useState(false);
  const [isNonfictionOpen, setIsNonfictionOpen] = useState(false);

  const toggleFiction = () => setIsFictionOpen(!isFictionOpen);
  const toggleNonfiction = () => setIsNonfictionOpen(!isNonfictionOpen);

  return (
    <nav className="bg-gray-800 text-white relative flex">
      <div className="fixed  left-0 h-full bg-gray-900 z-50">
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
      </div>
      {/* ... rest of your navigation bar content */}
    </nav>
  );
};

export default sideBar;
