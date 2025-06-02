import React, { useState } from 'react';
import './LookBook.css';

const LookbookSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="lookbook-section">
                <div className="overlay">
                    <div className="content">
                        <h3 style={{ color: '#095086' }}>The Beauty</h3>
                        <h1 style={{ color: '#095086' }}>LOOKBOOK</h1>
                        <button style={{ background: '#b00000', color: '#fff' }} onClick={() => setIsVideoOpen(true)}>▶ PLAY VIDEO</button>
                    </div>
                </div>
            </section>

            {isVideoOpen && (
                <div className="video-popup" onClick={() => setIsVideoOpen(false)}>
                    <div className="video-container" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsVideoOpen(false)}>✖</button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/2xdXKNQYN2o?autoplay=1"
                            title="Lookbook Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default LookbookSection; 