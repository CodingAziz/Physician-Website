// src/assets/icons/index.js
import React from 'react';
import {
  Calendar,
  Stethoscope,
  Users,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
} from 'lucide-react';

// Define default props for icons for consistency.
// These can be overridden when the icon components are used.
const defaultIconProps = {
  size: 24, // Default size for all icons
  className: "text-blue-600" // Default color for most icons
};

// Re-export icons with default props applied.
// This allows for cleaner usage in components.
export const CalendarIcon = (props) => <Calendar {...defaultIconProps} {...props} />;
export const StethoscopeIcon = (props) => <Stethoscope {...defaultIconProps} {...props} />;
export const UsersIcon = (props) => <Users {...defaultIconProps} {...props} />;
export const MapPinIcon = (props) => <MapPin {...defaultIconProps} {...props} />;
export const PhoneIcon = (props) => <Phone {...defaultIconProps} {...props} />;
export const MailIcon = (props) => <Mail {...defaultIconProps} {...props} />;
export const MenuIcon = (props) => <Menu {...defaultIconProps} {...props} />;
export const XIcon = (props) => <X {...defaultIconProps} {...props} />;