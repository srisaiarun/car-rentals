import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCategories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "sedan", name: "Sedans", image: "/images/sedan.avif", description: "Comfortable & fuel-efficient." },
    { id: "suv", name: "SUVs", image: "/images/suv.webp", description: "Spacious & powerful for all terrains." },
    { id: "sports", name: "Sports Cars", image: "/images/sports.jpeg", description: "Speed & performance at its best." },
    { id: "luxury", name: "Luxury Cars", image: "/images/luxury.jpeg", description: "Premium comfort & elegance." },
    { id: "electric", name: "Electric Cars", image: "/images/electric.webp", description: "Eco-friendly & high-tech rides." },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Explore Car Categories
        </h1>
        <p className="text-xl text-gray-600">
          Find the perfect car for your needs. Browse through our wide range of categories.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search car categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
              >
                View {category.name}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Car Categories. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CarCategories;