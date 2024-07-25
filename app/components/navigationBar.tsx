'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navigationBar.module.css';

const navigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold">BookStore</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/shop" className="hover:text-blue-400">Shop</Link>
            <Link href="/about" className="hover:text-blue-400">About Us</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
            <Link href="/login" className="hover:text-blue-400">Login</Link>
            <Link href="/signup" className="hover:text-blue-400">Signup</Link>
            <Link href="/cart" className="hover:text-blue-400">Cart</Link>
          </div>
        </div>
        <div className="flex items-center">
        <button onClick={toggleMenu} className="text-white hover:text-blue-400 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed  right-0 h-fit w-fit bg-gray-800 z-50 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col h-full justify-center items-center space-y-4 p-4">
          
          <Link href="/shop" className="hover:text-blue-400">Shop</Link>
          <Link href="/about" className="hover:text-blue-400">About Us</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
          <Link href="/login" className="hover:text-blue-400">Login</Link>
          <Link href="/signup" className="hover:text-blue-400">Signup</Link>
          <Link href="/cart" className="hover:text-blue-400">Cart</Link>
        </ul>
      </div>
    </nav>
  );
};

export default navigationBar;
