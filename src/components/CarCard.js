import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-2 rounded-md" />
      <h2 className="text-lg font-semibold">{car.name}</h2>
      <p className="text-gray-500">{car.description}</p>
      <Link to={`/cars/${car.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 inline-block">
        Select
      </Link>
    </div>
  );
};

export default CarCard;
