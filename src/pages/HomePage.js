import React from "react";
import { useNavigate } from "react-router-dom";

// Background Image Path (Ensure it's in `public/images/`)
const backgroundImage = "/images/logo.jpg"; // Correct relative path

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-4 z-50 relative">
        <div className="container mx-auto flex justify-between items-center px-6">
          <span className="text-lg font-semibold">📞 Call: +91 9182983242</span>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-500 px-4 py-2 rounded-lg text-white hover:bg-yellow-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-yellow-500 px-4 py-2 rounded-lg text-white hover:bg-yellow-600 transition"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Main Section with Background Image */}
      <section
        className="relative w-full h-screen bg-cover bg-center animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Correct syntax for JSX styles
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
          {/* Hero Section */}
          <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Road Mates</h1>
          <p className="bg-yellow-400 text-gray-900 text-xl font-semibold px-6 py-2 mt-4 rounded-md animate__animated animate__fadeIn animate__delay-2s">
            Reserve Now and Get 40% Off!
          </p>

          {/* Reserve Button */}
          <button
            onClick={() => navigate("/category")}
            className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg text-xl hover:bg-blue-700 transition animate__animated animate__fadeIn animate__delay-3s"
          >
            Reserve Now
          </button>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Road Mates?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold">Affordable Prices</h3>
              <p className="mt-4">Enjoy competitive pricing and flexible rental plans tailored to your needs.</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold">Premium Cars</h3>
              <p className="mt-4">Choose from a wide variety of top-quality cars that suit your style and needs.</p>
            </div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold">Fast and Easy Booking</h3>
              <p className="mt-4">Book your car in just a few clicks and get started with your journey right away!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2025 Road Mates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
