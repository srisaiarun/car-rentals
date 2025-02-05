import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarCategories from "./pages/CarCategories";
import CarPage from "./pages/CarPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/Login";  // Import LoginPage
import RegisterPage from "./pages/Register";  // Import RegisterPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CarCategories />} />
        <Route path="/category/:categoryId" element={<CarPage />} />
        <Route path="/booking/:carId" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />  {/* Login Route */}
        <Route path="/register" element={<RegisterPage />} />  {/* Register Route */}
      </Routes>
    </Router>
  );
}

export default App;
