// src/views/components/Button.jsx
import React from 'react';

/**
 * Reusable component for a button with primary/secondary styling.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {boolean} [props.primary=true] - If true, applies primary styling; otherwise, secondary.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 * @param {object} [props.rest] - Any other HTML attributes to pass to the <button> tag.
 */
const Button = ({ children, primary = true, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300
        ${primary ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;