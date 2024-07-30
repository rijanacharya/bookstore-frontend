'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navigationBar.module.css';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="flex items-center">
                    <Link href="/" className="text-white font-bold text-2xl md:text-4xl">BookStore</Link>
                </div>
                <div className="hidden md:flex items-center flex-1 justify-center">
                    <input
                        type="text"
                        placeholder="Search for books"
                        className="w-full max-w-lg px-4 py-2 rounded-md text-black"
                    />
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="hover:text-blue-400">Login</Link>
                    <Link href="/signup" className="hover:text-blue-400">Signup</Link>
                    <Link href="/signup" className="hover:text-blue-400">Signup</Link>
                    <Link href="/cart" className="hover:text-blue-400">Cart</Link>
                </div>
                <button onClick={toggleMenu} className="text-white hover:text-blue-400 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className={`fixed  right-0 h-fit w-fit bg-gray-800 z-50 transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col h-full justify-center items-center space-y-4 p-4">
                    <input
                        type="text"
                        placeholder="Search for books"
                        className="w-full px-4 py-2 rounded-md text-black"
                    />
                    <Link href="/shop" className="hover:text-blue-400">Shop</Link>
                    <Link href="/login" className="hover:text-blue-400">Login</Link>
                    <Link href="/signup" className="hover:text-blue-400">Signup</Link>
                    <Link href="/cart" className="hover:text-blue-400">Cart</Link>
                </ul>
            </div>
        </nav >
    );
};

export default NavigationBar;
