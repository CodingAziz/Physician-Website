// src/views/components/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../models/mockData'; // Import data from the Model layer

const TestimonialsSection = () => {
  // Logic: State to manage testimonials data, loading status, and errors
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Logic: Simulate data fetching
    const fetchTestimonials = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
        setTestimonials(testimonialsData); // Logic: Set testimonials from mock data
      } catch (err) {
        setError(err); // Logic: Handle errors
      } finally {
        setIsLoading(false); // Logic: Set loading to false after fetch
      }
    };
    fetchTestimonials();
  }, []); // Effect runs once on component mount

  // Design: Conditional rendering based on loading and error states
  if (isLoading) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-blue-50 mx-4 md:mx-12 my-8 rounded-lg shadow-inner text-center">
        <p className="text-gray-600 text-lg">Loading testimonials...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-blue-50 mx-4 md:mx-12 my-8 rounded-lg shadow-inner text-center">
        <p className="text-red-600 text-lg">Error loading testimonials: {error.message}</p>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-50 mx-4 md:mx-12 my-8 rounded-lg shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">What Our Patients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center">
              <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-blue-600">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;