// src/views/components/AppointmentBookingSection.jsx
import React from 'react';
import Button from './Button';
import { CalendarIcon } from '../../assets/icons'; // Import icon from assets

const AppointmentBookingSection = () => (
    <section id="book-appointment" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center mx-4 md:mx-12 my-8 rounded-lg shadow-xl">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Prioritize Your Health?</h3>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Book your appointment online today. It's quick, easy, and convenient.
        </p>
        <Button primary={false} className="bg-white text-blue-600 hover:bg-blue-100">
          <CalendarIcon className="inline-block mr-2" size={20} /> Book Online Now
        </Button>
      </div>
    </section>
);

export default AppointmentBookingSection;