import React from 'react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "Black Friday Guide: Best Sales & Discount Codes",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc ut.",
            category: "Shopping"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            title: "The White Sneakers Nearly Every Fashion Girls Own",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
            category: "Fashion"
        },
        {
            id: 3,
            src : "",
            title: "New York SS 2018 Street Style: By Antonia Melián",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc ut.",
            category: "Street Style"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        OUR BLOG
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-100">
                            {/* Image Container */}
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = `https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`;
                                    }}
                                    loading="lazy"
                                    style={{ display: 'block' }}
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                                        {post.category}
                                    </span>
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Meta Information */}
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        by {post.author}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        on {post.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300 overflow-hidden">
                                    <span className="block overflow-hidden" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical'
                                    }}>
                                        {post.title}
                                    </span>
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 overflow-hidden flex-1" style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {post.description}
                                </p>

                                {/* Read More Link */}
                                <div className="flex items-center justify-between mt-auto">
                                    <button className="text-red-500 font-medium hover:text-red-600 transition-colors duration-300 flex items-center">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Social Share */}
                                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="text-gray-400 hover:text-blue-500 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </button>
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center bg-white rounded-lg py-12 px-8 shadow-md">
                    <div className="flex items-center justify-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">FOLLOW US ON INSTAGRAM</h3>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Restez connectés avec nous sur Instagram pour découvrir nos dernières collections et inspirations mode
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center">
                            <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Free Delivery Worldwide</h4>
                            <p className="text-sm text-gray-600">Minim veniam quis nostrud exercitation</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">30 Days Return</h4>
                            <p className="text-sm text-gray-600">Simply return it within 30 days for an exchange</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Store Opening</h4>
                            <p className="text-sm text-gray-600">Shop open from Monday to Sunday</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;