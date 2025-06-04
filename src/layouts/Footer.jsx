import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email.trim()) {
            console.log('Subscribing email:', email);
            setEmail('');
        }
    };

    return (
        <footer className="bg-gray-100 border-t border-gray-200 ">
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">GET IN TOUCH</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>

                     
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zm5.105 18.066c-.284 1.013-.834 1.807-1.661 2.396-.827.59-1.757.884-2.792.884-1.035 0-1.965-.294-2.792-.884-.827-.589-1.377-1.383-1.661-2.396L8.05 12.987c.284-1.013.834-1.807 1.661-2.396.827-.59 1.757-.884 2.792-.884 1.035 0 1.965.294 2.792.884.827.589 1.377 1.383 1.661 2.396l.166 5.079z" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.8 12.8h4.6c-.1 1.4-1.4 4.1-4.6 4.1-2.8 0-5-2.3-5-5.1s2.2-5.1 5-5.1c1.6 0 2.6.7 3.2 1.3l2.1-2c-1.3-1.2-3-1.9-5.3-1.9-4.4 0-8 3.6-8 8s3.6 8 8 8c4.6 0 7.7-3.3 7.7-7.9 0-.5 0-1-.1-1.4H7.8v2.2zm13.9-2.8v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
                                </svg>
                            </a>

                            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.153-.6-.455-1.104-1.043-1.426-1.739-.322-.696-.484-1.431-.484-2.205 0-1.7.435-3.396 1.153-4.344.455-.6 1.043-1.104 1.739-1.426.696-.322 1.431-.484 2.205-.484 1.7 0 3.396.435 4.344 1.153.6.455 1.104 1.043 1.426 1.739.322.696.484 1.431.484 2.205 0 1.7-.435 3.396-1.153 4.344-.455.6-1.043 1.104-1.739 1.426-.696.322-1.431.484-2.205.484zm7.626-7.626c-.435-.435-.957-.783-1.565-1.043-.609-.261-1.261-.391-1.957-.391s-1.348.13-1.957.391c-.609.261-1.13.609-1.565 1.043-.435.435-.783.957-1.043 1.565-.261.609-.391 1.261-.391 1.957s.13 1.348.391 1.957c.261.609.609 1.13 1.043 1.565.435.435.957.783 1.565 1.043.609.261 1.261.391 1.957.391s1.348-.13 1.957-.391c.609-.261 1.13-.609 1.565-1.043.435-.435.783-.957 1.043-1.565.261-.609.391-1.261.391-1.957s-.13-1.348-.391-1.957c-.261-.609-.609-1.13-1.043-1.565z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                   
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">CATEGORIES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Men</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Women</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Dresses</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Sunglasses</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">LINKS</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Search</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Returns</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">HELP</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Track Order</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Shipping</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-6 lg:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">NEWSLETTER</h3>
                            <p className="text-gray-600 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        </div>

                        <div className="flex max-w-md w-full lg:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="px-6 py-3 bg-black text-white rounded-r-md hover:bg-gray-800 transition-colors text-sm font-medium"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        Copyright Â© 2018 <span className="text-gray-700">MassTechnologist.com</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

