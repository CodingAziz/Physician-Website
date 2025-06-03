// src/App.jsx
import React from 'react';
// Import the HomePage component from your views/pages directory.
// This is where the entire layout of your physician's website homepage is assembled.
import HomePage from './views/pages/HomePage.jsx';

// The main App component.
// It serves as the top-level container for your application's UI.
const App = () => {
  return (
    // The outermost div provides a base font and background color for the entire application.
    // 'font-sans' sets a default sans-serif font.
    // 'antialiased' applies font smoothing for better readability.
    // 'text-gray-900' sets a dark gray text color.
    // 'bg-gray-100' sets a very light gray background color for the body.
    <div className="font-sans antialiased text-gray-900 bg-gray-100">
      {/* Render the HomePage component.
          HomePage itself will contain the Header, all sections, and the Footer. */}
      <HomePage />
    </div>
  );
};

export default App; // Export App as the default export for main.jsx to use.