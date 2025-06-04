import React, { useEffect, useRef } from "react";
import { useCart } from "./CartContetxt";

export default function FlyingImage() {
    const { flyingImage, clearFlyingImage } = useCart();
    const imgRef = useRef();

    useEffect(() => {
        if (!flyingImage) return;
        const img = imgRef.current;
        if (!img) return;
        // Position initiale
        img.style.left = flyingImage.from.left + "px";
        img.style.top = flyingImage.from.top + "px";
        img.style.width = flyingImage.from.width + "px";
        img.style.height = flyingImage.from.height + "px";
        img.style.opacity = 1;
        // Forcer le reflow
        void img.offsetWidth;
        // Lancer l'animation
        img.style.transform = `translate(${flyingImage.to.left - flyingImage.from.left}px, ${flyingImage.to.top - flyingImage.from.top}px) scale(0.2)`;
        img.style.opacity = 0.2;
        const timer = setTimeout(() => {
            clearFlyingImage();
        }, 700);
        return () => clearTimeout(timer);
    }, [flyingImage, clearFlyingImage]);

    if (!flyingImage) return null;
    return (
        <img
            ref={imgRef}
            src={flyingImage.image}
            alt="flying"
            className="flying-image"
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                borderRadius: 8,
                pointerEvents: "none",
                opacity: 0,
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s",
                zIndex: 9999,
            }}
        />
    );
} 