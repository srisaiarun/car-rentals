import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-900 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-lg">Contact: +1-800-123-4567</span>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-yellow-500 px-4 py-2 rounded-lg">Login</Link>
          <Link to="/register" className="bg-yellow-500 px-4 py-2 rounded-lg">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
    