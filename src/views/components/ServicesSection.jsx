// src/views/components/ServicesSection.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import Button from './Button';
import { servicesData } from '../../models/mockData';
import { StethoscopeIcon, UsersIcon, MapPinIcon, CalendarIcon } from '../../assets/icons';

const iconComponents = {
  StethoscopeIcon: StethoscopeIcon,
  UsersIcon: UsersIcon,
  MapPinIcon: MapPinIcon,
  CalendarIcon: CalendarIcon,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white mx-4 md:mx-12 my-8 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Comprehensive Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"> {/* Added mb-12 to the grid */}
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.iconName];
            return (
              <ServiceCard
                key={index}
                icon={<IconComponent size={48} className="text-blue-600" />}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
        {/* Added mt-8 (margin-top: 2rem) to create space above the button */}
        <Button primary className="mt-8">View All Services</Button>
      </div>
    </section>
  );
};

export default ServicesSection;