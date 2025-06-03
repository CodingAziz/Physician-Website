// src/views/components/Footer.jsx
import React from 'react';
import NavigationLink from './NavigationLink';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center rounded-t-lg">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h5 className="text-xl font-bold">Dr. Nehal Clinic</h5>
          <p className="text-gray-400 text-sm">Compassionate Care for a Healthier You</p>
        </div>
        <nav className="flex space-x-6">
          <NavigationLink href="#home" className="!text-gray-400 hover:!text-white">Home</NavigationLink>
          <NavigationLink href="#services" className="!text-gray-400 hover:!text-white">Services</NavigationLink>
          <NavigationLink href="#about" className="!text-gray-400 hover:!text-white">About</NavigationLink>
          <NavigationLink href="#contact" className="!text-gray-400 hover:!text-white">Contact</NavigationLink>
        </nav>
      </div>
      <div className="border-t border-gray-700 pt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Dr. Nehal Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;