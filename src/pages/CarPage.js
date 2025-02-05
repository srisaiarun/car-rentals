import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import carsData from "../data/carsData"; // Import car data

const CarPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams(); // Get category ID from URL

  const cars = carsData[categoryId] || []; // Fetch cars dynamically

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Cars
      </h1>

      {cars.length === 0 ? (
        <p className="text-center text-red-600">No cars available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-lg text-gray-600">₹{car.pricePerHour}/hour</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/booking/${car.id}`, { state: car })} // Passing car data to BookingPage
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarPage;
