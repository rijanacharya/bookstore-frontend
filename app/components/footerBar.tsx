'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white w-full py-8 mt-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
                <div className="space-y-2">
                    <Link href="/contact" className="block hover:text-blue-400">Contact</Link>
                    <Link href="/about" className="block hover:text-blue-400">About</Link>
                </div>
                <div className="space-y-2">
                    <p>© 2024 All Rights Reserved</p>
                </div>
                <div className="space-y-2">
                    <Link href="/terms" className="block hover:text-blue-400">Terms of Use</Link>
                    <Link href="/privacy" className="block hover:text-blue-400">Privacy Notice</Link>
                    <Link href="/accessibility" className="block hover:text-blue-400">Accessibility Notice</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
