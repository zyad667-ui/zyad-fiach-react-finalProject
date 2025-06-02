import React from "react";
import Slider from "react-slick";
import "./CarouselSlick.css";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "LEATHER BAGS",
        subtitle: "New Collection 2018",
        description: "Découvrez notre nouvelle collection de sacs en cuir authentique, alliant élégance et durabilité.",
        button: "SHOP NOW",
    },
    {
        image: "https://i.pinimg.com/736x/81/17/2a/81172a440369456f8a8008a4f802fb7b.jpg",
        title: "WOMEN COLLECTION",
        subtitle: "Summer Sale 2018",
        description: "Profitez de nos dernières tendances mode avec jusqu'à 50% de réduction sur toute la collection.",
        button: "SHOP NOW",
    },
    {
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "FASHION TRENDS",
        subtitle: "New Arrivals",
        description: "Explorez les dernières tendances de la mode et trouvez votre style unique parmi nos nouveautés.",
        button: "SHOP NOW",
    },
];

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="carousel-arrow carousel-arrow-prev"
        onClick={onClick}
        aria-label="Previous slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="carousel-arrow carousel-arrow-next"
        onClick={onClick}
        aria-label="Next slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        fade: true,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: () => {
            setTimeout(() => {
                const elements = document.querySelectorAll('.slick-active .carousel-caption *');
                elements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; 
                    el.style.animation = null;
                });
            }, 100);
        }
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, idx) => (
                    <div key={idx} className="carousel-slide">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="carousel-image"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/1920x600/333/fff?text=Fashion+Collection';
                            }}
                        />
                        <div className="carousel-caption">
                            <h3 className="carousel-subtitle">{slide.subtitle}</h3>
                            <h2 className="carousel-title">{slide.title}</h2>
                            <p className="carousel-description">{slide.description}</p>
                            <button className="carousel-btn">{slide.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeCarousel;