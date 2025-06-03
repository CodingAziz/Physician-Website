// src/views/components/ServiceCard.jsx
import React from 'react';

/**
 * Reusable component for displaying a service card.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.icon - The icon element for the service.
 * @param {string} props.title - The title of the service.
 * @param {string} props.description - A brief description of the service.
 */
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;