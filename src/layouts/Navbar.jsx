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

                    {/* Icônes sociales - uniquement visible quand scrollé */}
                    <div className={`flex items-center space-x-4 transition-all duration-300 ${isScrolled
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-4 pointer-events-none'
                        }`}>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.89 2.745.099.12.112.225.085.348-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.160-1.507-.7-2.448-2.893-2.448-4.658 0-3.778 2.745-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.542 16.23c-2.086 0-4.016-1.108-5.089-2.897C6.16 11.896 6 10.306 6 8.5c0-1.806.16-3.396 1.453-4.833C8.526 2.378 10.456 1.27 12.542 1.27c2.086 0 4.016 1.108 5.089 2.897C18.924 5.604 19.084 7.194 19.084 9c0 1.806-.16 3.396-1.453 4.833-1.293 1.29-3.223 2.397-5.089 2.397zm0-13.73c-1.674 0-3.216.891-4.127 2.316C7.514 6.236 7.37 7.618 7.37 9c0 1.382.144 2.764 1.045 4.184.911 1.425 2.453 2.316 4.127 2.316 1.674 0 3.216-.891 4.127-2.316.901-1.42 1.045-2.802 1.045-4.184 0-1.382-.144-2.764-1.045-4.184C15.758 3.391 14.216 2.5 12.542 2.5z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

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