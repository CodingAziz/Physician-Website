// src/views/components/ContactSection.jsx
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from '../../assets/icons'; // Import icons from assets

const ContactSection = () => (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 mx-4 md:mx-12 my-8 rounded-lg shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Get in Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-xl shadow-md text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h4>
            <p className="flex items-center text-gray-700 mb-3">
              <MapPinIcon className="mr-3" size={24} />
              123 Health Lane, Suite 456, Cityville, State 12345
            </p>
            <p className="flex items-center text-gray-700 mb-3">
              <PhoneIcon className="mr-3" size={24} />
              (123) 456-7890
            </p>
            <p className="flex items-center text-gray-700 mb-6">
              <MailIcon className="mr-3" size={24} />
              info@nehal.com
            </p>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Office Hours</h4>
            <ul className="text-gray-700">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM (by appointment)</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Find Us on the Map</h4>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9554313271295!2d-73.9877652845946!3d40.74881777932829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259837864811f%3A0x446059b56f8f117c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default ContactSection;