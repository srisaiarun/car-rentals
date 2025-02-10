import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!phone || !password) {
      alert("Please enter valid credentials");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  const handleSocialLogin = (platform) => {
    alert(`Logging in with ${platform}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all hover:shadow-3xl">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6 animate-fade-in">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-6">Login to continue</p>

        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              "Login"
            )}
          </button>

          <div className="text-center text-gray-600 mt-4">Or login with</div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105 active:scale-95"
            >
              <FaGoogle className="text-xl" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 active:scale-95"
            >
              <FaFacebook className="text-xl" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
