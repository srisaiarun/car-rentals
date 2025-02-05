import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const { state: car } = useLocation(); // Get the car data passed from CarPage
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePayment = () => {
    // Payment logic can go here
    alert("Payment Successful!");
    navigate("/"); // Redirect to homepage after payment
  };

  const calculatePrice = () => {
    if (pickupTime && returnTime) {
      const pickup = new Date(pickupTime);
      const returnDate = new Date(returnTime);
      const timeDiff = (returnDate - pickup) / (1000 * 60 * 60); // Difference in hours

      if (timeDiff > 0) {
        const price = timeDiff * car.pricePerHour;
        setTotalPrice(price);
      } else {
        setTotalPrice(0);
      }
    }
  };

  React.useEffect(() => {
    calculatePrice();
  }, [pickupTime, returnTime]);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Confirm Your Booking</h1>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Pickup Time</label>
        <input
          type="datetime-local"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Return Time</label>
        <input
          type="datetime-local"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
        />
      </div>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold">
          Total Price: ₹{totalPrice.toFixed(2)}
        </p>
      </div>

      {/* Payment Details */}
      <div className="mb-6">
        <label className="text-lg font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 border rounded-md w-64 mt-2"
        />

        <label className="text-lg font-semibold mt-4">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className="px-4 py-2 border rounded-md w-64 mt-2"
        />

        <label className="text-lg font-semibold mt-4">UPI ID</label>
        <input
          type="text"
          placeholder="Enter your UPI ID"
          className="px-4 py-2 border rounded-md w-64 mt-2"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
