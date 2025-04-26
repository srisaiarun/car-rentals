import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

function ProfilePage() {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setName(data.name || '');
          setPhone(data.phone || '');
          setAddress(data.address || '');
        }
      };
      fetchUserProfile();
    }
  }, [user, db]);

  const handleSave = async () => {
    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        name,
        phone,
        address,
        email: user.email,
      });
      alert('Profile saved successfully!');
    }
  };

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <p className="mb-4 text-gray-600">Email: {user.email}</p>

        <input
          type="text"
          placeholder="Name"
          className="mb-2 p-2 border rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="mb-2 p-2 border rounded w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="mb-4 p-2 border rounded w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
