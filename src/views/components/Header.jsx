// src/views/components/Header.jsx
import React, { useState } from 'react';
import Button from './Button';
import NavigationLink from './NavigationLink';
import useScrollEffect from '../../controllers/useScrollEffect'; // Import the custom hook
import { CalendarIcon, MenuIcon, XIcon } from '../../assets/icons'; // Import icons from assets

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const isScrolled = useScrollEffect(50); // Logic: Use custom hook for scroll effect

  // Logic: Function to close mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center fixed w-full z-50 rounded-b-lg transition-all duration-300 ease-in-out
        ${isScrolled ? 'shadow-lg py-3' : 'shadow-md py-4'}`} // Design: Apply shadow and padding based on scroll state
    >
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <div className="flex items-center">
          <img src="/assets/doctor-logo.jpg" alt="Dr. Nehal Clinic Logo" className="h-12 w-12 rounded-full mr-3 object-cover" />
          <h1 className="text-2xl font-bold text-gray-800">Dr. Nehal Clinic</h1>
        </div>
        {/* Mobile menu toggle button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Logic: Toggle mobile menu state
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"} // Accessibility: Dynamic aria-label
        >
          {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />} {/* Design: Toggle icon based on state */}
        </button>
      </div>

      {/* Navigation links, conditionally rendered for mobile */}
      <nav
        className={`flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 w-full md:w-auto
          ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`} // Design: Show/hide based on mobile menu state
      >
        <NavigationLink href="#home" onClick={handleNavLinkClick}>Home</NavigationLink>
        <NavigationLink href="#about" onClick={handleNavLinkClick}>About Us</NavigationLink>
        <NavigationLink href="#services" onClick={handleNavLinkClick}>Services</NavigationLink>
        <NavigationLink href="#contact" onClick={handleNavLinkClick}>Contact Us</NavigationLink>
        <Button className="mt-3 md:mt-0" onClick={handleNavLinkClick}>
          <CalendarIcon className="inline-block mr-2" size={20} /> Book Appointment
        </Button>
      </nav>
    </header>
  );
};

export default Header;