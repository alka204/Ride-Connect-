import React, { useState } from "react";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import LocationInput from "./LocationInput.js";
import { useNavigate } from "react-router-dom"; // ✅ Added for redirect
import "../styles/BookingSection.css";

const BookingSection = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Function to handle booking submission
  const handleBooking = async () => {
    if (pickup && drop) {
      try {
        // Save to Firestore
        await addDoc(collection(db, "bookings"), {
          pickup,
          drop,
          timestamp: new Date(),
        });

        // ✅ Save locally for Dashboard
        localStorage.setItem(
          "ride",
          JSON.stringify({
            from: pickup,
            to: drop,
            date: new Date().toLocaleString(),
          })
        );

        alert("Booking confirmed!");
        setPickup("");
        setDrop("");

        // ✅ Navigate to select service screen
        navigate("/select-service");
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Something went wrong!");
      }
    } else {
      alert("Please enter both pickup and drop locations.");
    }
  };

  const handlePickupChange = (selectedLocation) => {
    setPickup(selectedLocation);
  };

  const handleDropChange = (selectedLocation) => {
    setDrop(selectedLocation);
  };

  return (
    <div className="booking-section d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="fw-bold text-dark mb-4">
        Bharat Moves On <span className="text-warning">ShareMyRide!</span>
      </h1>

      <div className="mb-3 w-75">
        <LocationInput
          inputId="pickupInput"
          suggestionId="pickupSuggestions"
          setLocation={handlePickupChange}
        />
      </div>

      <div className="mb-4 w-75">
        <LocationInput
          inputId="dropInput"
          suggestionId="dropSuggestions"
          setLocation={handleDropChange}
        />
      </div>

      <button
        className="btn btn-warning fw-bold px-5 py-2"
        onClick={handleBooking}
      >
        Book Ride
      </button>

      {/* Updated Services Section */}
      <div className="service-section mt-5 text-center">
        <h2 className="fw-bold text-dark mb-4">Our Services</h2>
        <div className="services-grid d-flex flex-wrap justify-content-center">
          {[
            { name: "Bike", icon: "🚲" },
            { name: "Auto", icon: "🛺" },
            { name: "Auto Share", icon: "👥🛺" },
            { name: "Parcel", icon: "📦" },
            { name: "Cab Economy", icon: "🚗" },
            { name: "Cab Premium", icon: "✨🚘" },
          ].map((service, index) => (
            <div
              key={index}
              className="service-tile m-3 p-4 shadow rounded text-center"
            >
              <div className="service-icon fs-1 mb-2">{service.icon}</div>
              <h5 className="fw-bold">{service.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
