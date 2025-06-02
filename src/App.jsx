import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './layouts/navbar';
import Footer from './layouts/Footer';
import ErrorPage from './pages/error/ErrorPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>


 <Footer />
    </>
  );
};

export default App;
