// src/views/components/HeroSection.jsx
import React from 'react';
import Button from './Button';
import { CalendarIcon } from '../../assets/icons';

const HeroSection = () => (
  <section id="home" className="relative text-black py-24 md:py-36 flex items-center justify-center rounded-b-xl overflow-hidden min-h-[500px]"> {/* Added min-h for visibility */}
    {/* Parallax Background Div */}
    {/* `absolute inset-0` ensures it covers the entire parent section.
        `bg-cover` scales the image to cover the entire container.
        `bg-center` centers the image.
        `bg-fixed-attachment` is for the parallax effect (requires custom CSS). */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed-attachment opacity-30"
      style={{ backgroundImage: "url('/assets/hero-banner.jpg')" }} // Ensure this image exists in your public/ folder
      role="img"
      aria-label="Modern clinic interior with bright, welcoming atmosphere"
    ></div>
    {/* Content layered over the background image */}
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
        Your Health, Our Priority. Compassionate Care for a Healthier You.
      </h2>
      <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up delay-200">
        Dedicated to providing comprehensive and personalized healthcare services in the heart of the city.
      </p>
      <Button primary>
        <CalendarIcon className="inline-block mr-2" size={20} /> Schedule Your Visit
      </Button>
    </div>
  </section>
);

export default HeroSection;

// IMPORTANT: For `bg-fixed-attachment` to work and for responsive parallax,
// ensure you have the following custom CSS in your `src/index.css` file:
/*
@layer utilities {
  .bg-fixed-attachment {
    background-attachment: fixed;
  }
  @media (max-width: 767px) { /* Adjust breakpoint as needed, e.g., for mobile */
/*
    .bg-fixed-attachment {
      background-attachment: scroll; /* Fallback for mobile for better performance */
/*
    }
  }
}
*/