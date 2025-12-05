'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#posts', label: 'Posts' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="inline-block">
                            <img src="/logo.png" alt="ZM Logo" className="h-8 sm:h-10 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1 lg:space-x-3 items-center">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base px-3 py-2 rounded-md hover:bg-blue-50"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.href}
                                    href={link.href} 
                                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}