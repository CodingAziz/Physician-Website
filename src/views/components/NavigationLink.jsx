// src/views/components/NavigationLink.jsx
import React from 'react';

/**
 * Reusable component for a navigation link.
 * @param {object} props - Component props.
 * @param {string} props.href - The URL the link points to.
 * @param {React.ReactNode} props.children - The content to be displayed inside the link.
 * @param {string} [props.className=''] - Additional CSS classes for styling.
 * @param {object} [props.rest] - Any other HTML attributes to pass to the <a> tag.
 */
const NavigationLink = ({ href, children, className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-blue-600 font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavigationLink;