import React from 'react';
import HeroSection from './Hero';
import BestSellerSection from '../pages/BestSeller';
import AboutSection from '../pages/About';
import FooterSection from '../pages/Footer';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <BestSellerSection />
        <AboutSection />
        <FooterSection />
    </div>
  )
}

export default Home