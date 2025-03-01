import React from "react";
import { useNavigate } from "react-router-dom";
import cars from "../data/cars"; // Import mock car data

const CarList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Car</h2>
      
      {/* Grid Layout for Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-lg p-4 rounded-lg transform hover:scale-105 transition">
            {/* Car Image */}
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded-md shadow-md" />

            {/* Car Details */}
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-gray-500">🚗 {car.category}</p>
            <p className="text-gray-700 font-semibold">💰 ${car.price} per day</p>

            {/* View Details Button */}
            <button 
              onClick={() => navigate(`/cars/${car.id}`)}
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
