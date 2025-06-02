import React from "react";
import Slider from "react-slick";
import "./CarouselSlick.css"; // Pour tes styles personnalisés

const slides = [
    {
        image: "/images/slide1.jpg",
        title: "Women Collection 2018",
        subtitle: "New arrivals",
        button: "Shop Now",
    },
    {
        image: "/images/slide2.jpg",
        title: "Women Collection 2018",
        subtitle: "New arrivals",
        button: "Shop Now",
    },
    {
        image: "/images/slide3.jpg",
        title: "Women Collection 2018",
        subtitle: "New arrivals",
        button: "Shop Now",
    },
];

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, idx) => (
                <div key={idx} className="carousel-slide" style={{ position: "relative" }}>
                    <img src={slide.image} alt={slide.title} className="carousel-image" />
                    <div className="carousel-caption">
                        <h2>{slide.title}</h2>
                        <h3>{slide.subtitle}</h3>
                        <button className="carousel-btn">{slide.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default HomeCarousel;