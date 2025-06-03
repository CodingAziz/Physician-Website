// src/views/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-gray-50 rounded-lg shadow-inner mx-4 md:mx-12 my-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="md:w-1/2 flex justify-center md:justify-start"> {/* Centering for smaller screens */}
        {/* Container for the circular image */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/doctor-image.jpg" // Image from public/ folder
            alt="Professional portrait of Dr. [Doctor's Name], a friendly general physician"
            className="w-full h-full object-cover" // Ensure image covers the circular container
          />
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet Dr. Nehal</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Dr. Nehal is a highly experienced general physician with over 15 years of
          practice in New York. Dedicated to patient-centered care, Dr. Nehal
          believes in a holistic approach to health, focusing on preventative medicine and
          building strong, trusting relationships with patients.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to empower you with the knowledge and support needed to make informed
          decisions about your health, ensuring a healthier and happier life for you and your family.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;