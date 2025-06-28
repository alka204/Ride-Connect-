import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const BookAuto = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const bookRide = async () => {
    try {
      console.log("Booking ride with:", pickup, drop);

      const ride = await addDoc(collection(db, "rides"), {
        riderId: "rider123", // dummy
        pickup,
        drop,
        driverId: null,
        status: "searching",
        timestamp: Date.now(),
      });

      console.log("Ride booked successfully:", ride.id);
      alert("Ride booked successfully!");
    } catch (error) {
      console.error("❌ Firebase error:", error); // Log the exact error
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
      <button onClick={bookRide}>Book Ride</button>
    </div>
  );
};

export default BookAuto;
