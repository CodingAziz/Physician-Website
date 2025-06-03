// src/views/pages/HomePage.jsx
import React from 'react';
// Import all section components from the views/components directory
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentBookingSection from '../components/AppointmentBookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      {/* Header is often part of a global layout, but for a simple page, it's included here */}
      <Header />
      {/* Main content area, with padding to account for the fixed header */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <AppointmentBookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;