import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Lottie from "lottie-react";
import successAnimation from "../assets/success.json"; // Ensure this file exists

const mapContainerStyle = { width: "100%", height: "300px" };
const center = { lat: 28.7041, lng: 77.1025 }; // Default: Delhi, India

const BookingPage = () => {
  const navigate = useNavigate();
  const { state: car } = useLocation();
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pickupLocation, setPickupLocation] = useState(center);
  const [discountCode, setDiscountCode] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const discounts = { SAVE10: 10, SAVE20: 20 }; // Discount codes

  const calculatePrice = () => {
    if (pickupTime && returnTime) {
      const pickup = new Date(pickupTime);
      const returnDate = new Date(returnTime);
      const hours = (returnDate - pickup) / (1000 * 60 * 60);
      if (hours > 0) {
        let price = hours * car.pricePerHour;
        if (discountCode in discounts) {
          price -= (price * discounts[discountCode]) / 100;
        }
        setTotalPrice(price);
        setError("");
      } else {
        setTotalPrice(0);
        setError("Return time must be after pickup time.");
      }
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [pickupTime, returnTime, discountCode]);

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        navigate("/");
      }, 2000);
    }, 2000);
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen flex items-center justify-center p-6 transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-2xl transition-all hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-blue-900 dark:text-blue-300 mb-8">
          Confirm Your Booking
        </h1>

        {/* Car Details */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Car Details</h2>
          <div className="flex items-center space-x-6">
            <img src={car.image} alt={car.name} className="w-32 h-32 rounded-lg object-cover" />
            <div>
              <p className="text-xl font-bold">{car.name}</p>
              <p className="text-lg">₹{car.pricePerHour}/hour</p>
            </div>
          </div>
        </div>

        {/* Location Picker */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Select Pickup Location
          </h2>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" onLoad={handleMapLoad}>
            {mapLoaded && (
              <GoogleMap mapContainerStyle={mapContainerStyle} center={pickupLocation} zoom={12}>
                <Marker
                  position={pickupLocation}
                  draggable={true}
                  onDragEnd={(e) => {
                    const newLocation = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                    setPickupLocation(newLocation);
                    console.log("New Location:", newLocation);
                  }}
                />
              </GoogleMap>
            )}
          </LoadScript>
        </div>

        {/* Time Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="text-lg font-semibold">Pickup Time</label>
            <input type="datetime-local" className="px-4 py-3 border rounded-lg w-full mt-2 dark:bg-gray-700 dark:border-gray-600" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
          </div>
          <div>
            <label className="text-lg font-semibold">Return Time</label>
            <input type="datetime-local" className="px-4 py-3 border rounded-lg w-full mt-2 dark:bg-gray-700 dark:border-gray-600" value={returnTime} onChange={(e) => setReturnTime(e.target.value)} />
          </div>
        </div>

        {/* Discount Code */}
        <div className="mt-6">
          <input type="text" placeholder="Enter Discount Code (SAVE10, SAVE20)" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" value={discountCode} onChange={(e) => setDiscountCode(e.target.value.toUpperCase())} />
        </div>

        {/* Price Display */}
        <div className="text-center mt-6">
          <p className="text-2xl font-semibold">
            Total Price: <span className="text-blue-600 dark:text-blue-300">₹{totalPrice.toFixed(2)}</span>
          </p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-6 text-center">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Toggle Dark Mode
          </button>
        </div>

        {/* Pay Now Button */}
        <div className="mt-6 text-center">
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95">
            Pay Now
          </button>
        </div>

        {/* Payment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Confirm Payment</h2>
              <p className="text-lg mb-6">Proceed with the payment of ₹{totalPrice.toFixed(2)}?</p>
              <div className="flex justify-end space-x-4">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">Cancel</button>
                <button onClick={handlePayment} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {isLoading ? (
                    <div className="animate-spin h-6 w-6 border-b-2 border-white"></div>
                  ) : paymentSuccess ? (
                    <Lottie animationData={successAnimation} loop={false} className="h-8 w-8" />
                  ) : (
                    "Confirm"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;