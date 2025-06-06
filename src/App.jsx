import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import ErrorPage from './pages/error/ErrorPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopPage from './pages/shop/ShopPage';
import ContactPage from './pages/contact/contactPage';
import AboutPage from './pages/about/AboutPage';
import AuthPage from './pages/auth/AuthPage';
import FlyingImage from './components/FlyingImage';
import CartPage from './pages/viewCard/CartPage';
import BlogPage from './pages/blog/BlogPage';


const App = () => {
  return (
    <>
      <FlyingImage />
      <Navbar />

     <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>


      <Footer />
    </>
  );
};

export default App;
