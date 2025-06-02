import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // Change l'état après 50px de défilement
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md py-2'
                : 'bg-transparent py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo au centre */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/" className="text-2xl font-bold">
                            <span className="text-black">Fashe</span>
                            <span className="text-red-500">.</span>
                        </Link>
                    </div>

                    {/* Menu de navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`transition-colors ${isScrolled
                                    ? 'text-red-500 hover:text-red-600'
                                    : 'text-red-500 hover:text-red-600'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            Shop
                        </Link>
                        <Link
                            to="/sale"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            Sale
                        </Link>
                        <Link
                            to="/features"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            Features
                        </Link>
                        <Link
                            to="/blog"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/about"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Section droite - Email et devise + icônes utilisateur */}
                    <div className="flex items-center space-x-4">
                        {/* Email et devise - visibles quand scrollé */}
                        <div className={`hidden lg:flex items-center space-x-4 transition-all duration-300 ${isScrolled
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-4 pointer-events-none'
                            }`}>
                            <span className="text-gray-500 text-sm">fashe@example.com</span>
                            <select className="text-gray-700 text-sm bg-transparent border-none focus:outline-none">
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                            </select>
                        </div>

                        {/* Icônes utilisateur et panier */}
                        <div className="flex items-center space-x-3">
                            <button className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                            <button className={`transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-red-500'
                                    : 'text-gray-700 hover:text-red-500'
                                }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.39.39-.39 1.024 0 1.414L6.414 17H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4M7 13H5.4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button className={`transition-colors ${isScrolled
                                ? 'text-gray-700'
                                : 'text-gray-700'
                            }`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;