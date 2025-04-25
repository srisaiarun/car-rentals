// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import HomePage from "./pages/HomePage";
import CarCategories from "./pages/CarCategories";
import CarPage from "./pages/CarPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AccountPage from "./pages/Account"; // Account page for user info

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Handle logout
    auth.signOut();
    setUser(null); // Update user state on logout
  };

  return (
    <Router>
      <div className="flex justify-between p-4 bg-gray-800 text-white">
        <div>
          <Link to="/" className="text-xl font-bold">
            Car Rentals
          </Link>
        </div>

        <div className="space-x-4">
          {!user ? (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/account" className="hover:underline">
                {user.email} {/* Display user's email or other information */}
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CarCategories />} />
        <Route path="/category/:categoryId" element={<CarPage />} />
        <Route path="/booking/:carId" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} /> {/* User profile page */}
      </Routes>
    </Router>
  );
}

export default App;
