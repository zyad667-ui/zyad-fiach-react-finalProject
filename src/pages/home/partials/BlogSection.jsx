

import newOrkImg from '../../../assets/nework.jpg';
import bfImg from '../../../assets/bf.jpg';
import chinatownImg from '../../../assets/chinatown.jpg';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            image: newOrkImg,
            title: "Black Friday Guide: Best Sales & Discount Codes",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc ut.",
        },
        {
            id: 2,
            image: bfImg,
            title: "The White Sneakers Nearly Every Fashion Girls Own",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...",
        },
        {
            id: 3,
            image: chinatownImg,
            title: "New York SS 2018 Street Style: By Annina Mislin",
            author: "fashi-theme Admin",
            date: "Dec 28, 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">OUR BLOG</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                            <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">{post.title}</h3>
                                <div className="text-xs text-gray-500 mb-2">
                                    by {post.author} on {post.date}
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-3 flex-1">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center bg-white rounded-lg py-12 px-8 shadow-md mt-12">
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
export default BlogSection;import React from 'react';