import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        {/* Small Logo (Redirects to Company History Page) */}
        <button onClick={() => navigate("/history")} className="focus:outline-none">
          <img src="/images/logo2.jpg" alt="Road Mates Logo" className="w-12 h-12 rounded-full hover:scale-110 transition-transform" />
        </button>

        {/* Contact Info */}
        <span className="text-lg font-semibold hidden md:inline">📞 Call: +91 9182983242</span>

        {/* Login & Register Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-500 px-4 py-2 rounded-lg text-white hover:bg-yellow-600 transition-colors focus:outline-none"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-500 px-4 py-2 rounded-lg text-white hover:bg-yellow-600 transition-colors focus:outline-none"
          >
            Register
          </button>
        </div>
      </header>

      {/* Hero Section with Cover Photo */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/logo.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center px-6">
          <p className="bg-yellow-400 text-gray-900 text-xl font-semibold px-6 py-2 mt-4 rounded-md shadow-lg animate-pulse">
            Reserve Now and Get 40% Off!
          </p>
          <button
            onClick={() => navigate("/category")}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 mt-6 rounded-lg text-xl font-bold hover:scale-110 transition-transform shadow-xl focus:outline-none"
          >
            Reserve Now 🚗
          </button>
        </div>
      </section>

      {/* Why Road Mates? */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Road Mates?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold">Affordable Prices</h3>
              <p className="mt-4">Enjoy competitive pricing and flexible rental plans tailored to your needs.</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold">Premium Cars</h3>
              <p className="mt-4">Choose from a wide variety of top-quality cars that suit your style and needs.</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold">Fast and Easy Booking</h3>
              <p className="mt-4">Book your car in just a few clicks and get started with your journey right away!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Offers Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">🔥 Latest Offers 🔥</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-800">Weekend Getaway 🚙</h3>
              <p className="text-gray-600 mt-2">Get 50% off on SUV rentals every weekend.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-800">Luxury for Less 💎</h3>
              <p className="text-gray-600 mt-2">Book a luxury car and enjoy 30% off this month.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-800">Electric Car Special ⚡</h3>
              <p className="text-gray-600 mt-2">Save 20% on eco-friendly electric cars.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2025 Road Mates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;