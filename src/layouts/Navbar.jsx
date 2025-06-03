import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            <div className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-10'} flex items-center justify-end px-8`} style={{minHeight: isScrolled ? 0 : 40}}>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span>fashe@example.com</span>
                    <select className="bg-transparent border-none outline-none cursor-pointer">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>PKR</option>
                        <option>CAD</option>
                        <option>JPY</option>
                    </select>
                </div>
            </div>

            <nav className={`w-full bg-white transition-all duration-300 shadow-sm ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
                    
                    <div className="flex-1 flex justify-center md:justify-start">
                        <Link to="/" className="text-3xl font-extrabold tracking-tight flex items-center">
                            <span className="text-black">Fashe</span>
                            <span className="text-red-500 ml-1">.</span>
                        </Link>
                    </div>
                    
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-8 text-base font-medium">
                            <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
                            <li><Link to="/shop" className="hover:text-red-500 transition-colors">Shop</Link></li>
                            <li><Link to="/sale" className="hover:text-red-500 transition-colors">Sale</Link></li>
                            <li><Link to="/features" className="hover:text-red-500 transition-colors">Features</Link></li>
                            <li><Link to="/blog" className="hover:text-red-500 transition-colors">Blog</Link></li>
                            <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                   
                    <div className="flex-1 flex justify-end items-center space-x-6">
                       
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        
                        <div className="w-px h-6 bg-gray-200" />
                        
                        <div className="relative">
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.39.39-.39 1.024 0 1.414L6.414 17H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4M7 13H5.4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex justify-center mt-2">
                    <ul className="flex space-x-6 text-base font-medium">
                        <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
                        <li><Link to="/shop" className="hover:text-red-500 transition-colors">Shop</Link></li>
                        <li><Link to="/sale" className="hover:text-red-500 transition-colors">Sale</Link></li>
                        <li><Link to="/features" className="hover:text-red-500 transition-colors">Features</Link></li>
                        <li><Link to="/blog" className="hover:text-red-500 transition-colors">Blog</Link></li>
                        <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;