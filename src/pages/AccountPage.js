// src/pages/Account.js
import React from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    // Navigate to profile editing page (you can create a page for this if needed)
    alert("Edit Profile clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p className="text-lg">Email: {auth.currentUser?.email}</p>
        {/* Add more user info here, like booking history */}
        <button
          onClick={handleEditProfile}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
