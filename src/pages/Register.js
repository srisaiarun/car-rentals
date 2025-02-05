import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // For simplicity, we'll just check if fields are filled and then redirect to Home page
    if (contactNumber && password) {
      navigate("/"); // Redirect to Home page after registration
    } else {
      alert("Please fill in the required fields");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Register</h1>
      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Contact Number</label>
        <input
          type="text"
          placeholder="Enter your contact number"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <label className="text-lg font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="px-4 py-2 border rounded-md w-64 mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
