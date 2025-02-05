import React from "react";
import { useNavigate } from "react-router-dom";

const CarCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: "sedan", name: "Sedans", image: "/images/sedan.avif", description: "Comfortable & fuel-efficient." },
    { id: "suv", name: "SUVs", image: "/images/suv.webp", description: "Spacious & powerful for all terrains." },
    { id: "sports", name: "Sports Cars", image: "/images/sports.jpeg", description: "Speed & performance at its best." },
    { id: "luxury", name: "Luxury Cars", image: "/images/luxury.jpeg", description: "Premium comfort & elegance." },
    { id: "electric", name: "Electric Cars", image: "/images/electric.webp", description: "Eco-friendly & high-tech rides." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center text-white bg-blue-900 p-4 rounded-lg">
        Choose a Car Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/category/${category.id}`)} // Navigate to specific category
          >
            <img src={category.image} alt={category.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold">{category.name}</h2>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg"
              >
                View {category.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCategories;
