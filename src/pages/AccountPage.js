import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [idProof, setIdProof] = useState("");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking"); // After clicking "Confirm Booking", navigate to Booking page
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Your Account</h1>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">ID Proof</label>
        <input
          type="text"
          placeholder="Enter your ID proof"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={idProof}
          onChange={(e) => setIdProof(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">UPI ID</label>
        <input
          type="text"
          placeholder="Enter your UPI ID"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
