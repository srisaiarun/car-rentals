import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Firebase auth
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Firestore
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  const user = auth.currentUser; // Get the logged-in user

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false); // Flag to track first-time users

  useEffect(() => {
    if (user) {
      // Check if the user has data in Firestore
      const fetchUserData = async () => {
        const docRef = doc(db, "users", user.uid); // Document for the current user
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data()); // Set the user data if it exists
        } else {
          setIsNewUser(true); // Flag as new user if no data exists
        }
      };

      fetchUserData();
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [user, db, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const userRef = doc(db, "users", user.uid);

    try {
      // Save user data to Firestore
      await setDoc(userRef, userData, { merge: true });
      setIsEditing(false); // Stop editing after saving
      setIsNewUser(false); // Mark as non-new user after first-time setup
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <button
          onClick={() => navigate("/")}
          className="focus:outline-none hover:scale-110 transition-transform"
        >
          <img src="/images/logo2.jpg" alt="Road Mates Logo" className="w-12 h-12 rounded-full" />
        </button>
        <span className="text-lg font-semibold">Profile</span>
      </header>

      {/* Profile Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Your Profile</h2>

          {/* If the user is new, ask them to enter details */}
          {isNewUser ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md border w-2/3"
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md border w-2/3"
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md border w-2/3"
                />
              </div>

              <div className="mt-6">
                <button
                  onClick={handleSave}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
                >
                  Save Profile
                </button>
              </div>
            </div>
          ) : (
            // Display user information after first-time setup
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Name</label>
                <p className="text-xl">{userData.name}</p>
              </div>

              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Phone</label>
                <p className="text-xl">{userData.phone}</p>
              </div>

              <div className="flex flex-col items-center">
                <label className="text-lg font-medium">Address</label>
                <p className="text-xl">{userData.address}</p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2025 Road Mates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
