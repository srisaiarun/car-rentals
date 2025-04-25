// src/pages/Account.js
import React from "react";
import { auth } from "../firebaseConfig"; // Import the Firebase auth module

const AccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p className="text-lg">Email: {auth.currentUser?.email}</p>
        {/* Display more user info if needed */}
      </div>
    </div>
  );
};

export default AccountPage;
