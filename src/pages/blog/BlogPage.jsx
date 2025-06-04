import React from 'react';
import newOrkImg from '../home/partials/../../../assets/nework.jpg';
import bfImg from '../home/partials/../../../assets/bf.jpg';
import chinatownImg from '../home/partials/../../../assets/chinatown.jpg';

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

export default function BlogPage() {
  return (
    <section className="bg-white min-h-screen pt-20">
      {/* Banner */}
      <div className="w-full flex items-center justify-center relative mb-8" style={{ height: '220px', background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80) center/cover' }}>
        <h2 className="text-4xl font-extrabold tracking-widest text-white drop-shadow-lg" style={{ letterSpacing: '0.15em' }}>BLOG</h2>
      </div>
      <div className="max-w-md mx-auto px-2">
        <h2 className="text-2xl font-bold text-center mb-6 tracking-tight">OUR BLOG</h2>
        <div className="flex flex-col gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full h-40 bg-gray-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight line-clamp-2">{post.title}</h3>
                <div className="text-xs text-gray-500 mb-1">
                  by {post.author} on {post.date}
                </div>
                <p className="text-gray-600 text-xs line-clamp-3 flex-1">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 