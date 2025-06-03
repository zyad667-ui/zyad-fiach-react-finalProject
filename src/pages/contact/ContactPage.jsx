import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Banner Section */}
            <div className="w-full flex items-center justify-center relative mb-8" style={{ height: '120px', background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80) center/cover' }}>
                <h2 className="text-4xl font-extrabold tracking-widest text-white drop-shadow-lg" style={{ letterSpacing: '0.15em' }}>CONTACT</h2>
            </div>
            {/* Contact Section */}
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 pb-16">
                {/* Map */}
                <div className="w-full md:w-1/2 h-80 rounded overflow-hidden shadow relative">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=2300+Traverwood+Dr,+Ann+Arbor,+MI+48105,+USA&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
                {/* Form */}
                <form className="w-full md:w-1/2 bg-white rounded shadow p-8 flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold mb-2 text-black">Send us your message</h2>
                    <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black text-black" />
                    <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black text-black" />
                    <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black text-black" />
                    <textarea placeholder="Message" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black text-black min-h-[100px] resize-none" />
                    <button type="submit" className="bg-black text-white rounded py-2 mt-2 font-semibold tracking-widest hover:bg-gray-800 transition">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;