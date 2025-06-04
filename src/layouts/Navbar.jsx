import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu mobile lors du redimensionnement de l'écran
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            {/* Top bar - cachée sur mobile */}
            <div className={`w-full bg-white border-b border-gray-200 transition-all duration-300 hidden sm:flex ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-10'} items-center justify-end px-4 sm:px-8`} style={{ minHeight: isScrolled ? 0 : 40 }}>
                <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                    <span className="hidden sm:inline">fashe@example.com</span>
                    <select className="bg-transparent border-none outline-none cursor-pointer text-xs sm:text-sm">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>PKR</option>
                        <option>CAD</option>
                        <option>JPY</option>
                    </select>
                </div>
            </div>

            {/* Main navbar */}
            <nav className={`w-full bg-white transition-all duration-300 shadow-sm ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center">
                            <span className="text-black">Fashe</span>
                            <span className="text-red-500 ml-1">.</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-4 lg:space-x-8 text-sm lg:text-base font-medium">
                            <li><a href="/" className="hover:text-red-500 transition-colors px-2 py-1">Home</a></li>
                            <li><a href="/shop" className="hover:text-red-500 transition-colors px-2 py-1">Shop</a></li>
                            <li><a href="/sale" className="hover:text-red-500 transition-colors px-2 py-1">Sale</a></li>
                            <li><a href="/features" className="hover:text-red-500 transition-colors px-2 py-1">Features</a></li>
                            <li><a href="/blog" className="hover:text-red-500 transition-colors px-2 py-1">Blog</a></li>
                            <li><a href="/about" className="hover:text-red-500 transition-colors px-2 py-1">About</a></li>
                            <li><a href="/contact" className="hover:text-red-500 transition-colors px-2 py-1">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* User icon - caché sur très petits écrans */}
                        <Link to="/auth" className="hidden sm:block text-gray-400 hover:text-red-500 transition-colors p-1">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>

                        {/* Divider - caché sur très petits écrans */}
                        <div className="hidden sm:block w-px h-6 bg-gray-200" />

                        {/* Cart icon */}
                        <CartIcon />

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden text-gray-400 hover:text-red-500 transition-colors p-1 ml-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
                        <a
                            href="/"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="/shop"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Shop
                        </a>
                        <a
                            href="/sale"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Sale
                        </a>
                        <a
                            href="/features"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="/blog"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Blog
                        </a>
                        <a
                            href="/about"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors"
                        >
                            Contact
                        </a>

                        {/* Mobile user icon */}
                        <div className="border-t border-gray-100 pt-4 mt-4">
                            <Link to="/auth" className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded-md transition-colors">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Mon compte
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;