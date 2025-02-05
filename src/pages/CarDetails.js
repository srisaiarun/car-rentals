import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import cars from "../data/cars";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();

  if (!car) return <p>Car not found!</p>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4">{car.name}</h2>
      <img src={car.image} alt={car.name} className="w-full max-w-lg h-60 object-cover rounded-lg" />
      <p className="text-xl mt-4">💰 Price: ${car.price} per day</p>

      {/* Booking Form */}
      <div className="mt-6">
        <input type="text" placeholder="Enter your contact number" className="px-4 py-2 border rounded-md w-full mb-2" />
        <input type="text" placeholder="Enter your address" className="px-4 py-2 border rounded-md w-full mb-2" />
        <input type="datetime-local" className="px-4 py-2 border rounded-md w-full mb-4" />
        <button 
          onClick={() => navigate("/payment")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
