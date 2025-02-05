import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="container mx-auto text-center py-16">
      {/* Header Section */}
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to Car Rental
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Your journey starts here! Find the perfect car for your next adventure.
      </p>

      {/* Call to Action */}
      <button
        onClick={() => navigate('/cars')} // Navigate to the car listing page
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg text-lg"
      >
        Browse Cars
      </button>

      {/* Hero Image */}
      <div className="mt-12">
        <img
          src="/assets/hero-image.jpg" // Path to your hero image
          alt="Car Rental Hero"
          className="rounded-2xl shadow-md w-full max-w-4xl mx-auto"
        />
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-gray-500">
        <p>Affordable Rentals. Exceptional Service. Safe Rides.</p>
      </div>
    </div>
  );
};

export default Home;
