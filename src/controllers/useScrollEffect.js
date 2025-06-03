// src/controllers/useScrollEffect.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user has scrolled past a certain threshold.
 * @param {number} threshold - The scroll position in pixels to trigger the effect.
 * @returns {boolean} - True if scrolled past threshold, false otherwise.
 */
const useScrollEffect = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Update state based on window scroll position
      setIsScrolled(window.scrollY > threshold);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]); // Effect re-runs if threshold changes

  return isScrolled; // Return the scroll state
};

export default useScrollEffect;