import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase"; // Adjust path as needed
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    contactNumber: "",
    confirmEmail: "",
    confirmPassword: "",
    location: null, // to store location { latitude, longitude }
  });

  const navigate = useNavigate();
  useEffect(() => {
    // Get user location when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          }));
        },
        (error) => {
          console.error("Error getting location: ", error);
          // Optionally set location to null or default
          setFormData((prev) => ({ ...prev, location: null }));
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setFormData((prev) => ({ ...prev, location: null }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "userDetails"), formData);
      alert("Information saved to Firestore!");
      setFormData({
        fullName: "",
        username: "",
        contactNumber: "",
        confirmEmail: "",
        confirmPassword: "",
        location: null,
      });
      navigate("/home");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save data");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">More Information</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirm Email"
          value={formData.confirmEmail}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MoreInfo;
