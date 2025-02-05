import React from "react";
import { useParams } from "react-router-dom";

const CarViewPage = () => {
  const { carId } = useParams();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">360° View of Car {carId}</h1>
      <div className="w-full h-96 flex justify-center items-center bg-gray-300">
        {/* Replace with actual 360° viewer */}
        <img
          src={`https://via.placeholder.com/600x400.png?text=360+View+of+Car+${carId}`}
          alt={`Car ${carId}`}
          className="w-3/4 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CarViewPage;
