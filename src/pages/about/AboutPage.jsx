import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Banner Section */}
            <div className="w-full flex items-center justify-center relative mb-8" style={{ height: '220px', background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80) center/cover' }}>
                <h2 className="text-4xl font-extrabold tracking-widest text-white drop-shadow-lg" style={{ letterSpacing: '0.15em' }}>ABOUT</h2>
            </div>
            {/* About Content Section */}
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4 pb-16">
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="https://i.pinimg.com/736x/5a/b6/7b/5ab67b2cc631c4fee1941adebfbdb060.jpg" alt="About" className="rounded-lg object-cover max-h-[500px] w-full md:w-[400px]" />
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-light mb-4 text-black">Our story</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-2">
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.<br /><br />
                        <span className="not-italic font-normal">- Steve Job's</span>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 