import React from 'react';
import HomeCarousel from './partials/CarouselSlick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategorySection from './partials/CategorieSection';
import ProductsGrid from './partials/ProductsGrid';
import LookBook from './partials/LookBook';
import BlogSection from './partials/BlogSection';


const HomePage = () => {
    return (
        <>
            <HomeCarousel />
            <CategorySection />
            <ProductsGrid />
            <LookBook/>
            <BlogSection/>

        </>
    );
};

export default HomePage;
