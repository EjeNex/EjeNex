import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import SubHeroSection from '../components/SubHeroSection';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-18 lg:pt-16">
      <Header />
      <HeroSection />
      <SubHeroSection />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Home

    
 