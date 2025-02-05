import React from "react";
import { useParams } from "react-router-dom";

const CarRatingsPage = () => {
  const { carId } = useParams();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Ratings & Reviews of Car {carId}</h1>
      {/* Sample ratings */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">User Ratings</h2>
        <p className="text-lg">⭐⭐⭐⭐☆ (4.5/5)</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">User Reviews:</h3>
        <p className="text-lg">"Great car! Very smooth ride."</p>
        <p className="text-lg">"Super fuel-efficient and easy to drive!"</p>
      </div>
    </div>
  );
};

export default CarRatingsPage;
