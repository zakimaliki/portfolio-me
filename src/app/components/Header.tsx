'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home">
                            <img src="/logo.png" alt="ZM Logo" className="h-10 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            Home
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            About
                        </a>
                        <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            Projects
                        </a>
                        <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            Experience
                        </a>
                        <a href="#posts" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            Posts
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            Contact
                        </a>
                        {/* Social Links */}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Home
                            </a>
                            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                About
                            </a>
                            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Projects
                            </a>
                            <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Experience
                            </a>
                            <a href="#posts" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Posts
                            </a>
                            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                Contact
                            </a>
                            {/* Social Links Mobile */}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
} 