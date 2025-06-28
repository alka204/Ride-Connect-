import React, { useEffect, useState } from "react";
import CabMap from "../components/CabMap.js"; // Import the map component

const Dashboard = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedRide = localStorage.getItem("ride");
    if (savedRide) {
      setBooking(JSON.parse(savedRide));
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2>Your Dashboard</h2>

      {booking ? (
        <div className="card p-4 shadow">
          <h4 className="mb-3">Your Ride Details</h4>
          <p>
            <strong>From:</strong> {booking.from}
          </p>
          <p>
            <strong>To:</strong> {booking.to}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Service:</strong> {booking.service || "Not selected"}
          </p>
        </div>
      ) : (
        <p>No bookings found.</p>
      )}

      {/* Add Cab Map below the ride details */}
      <div style={{ marginTop: "2rem" }}>
        <CabMap />
      </div>
    </div>
  );
};

export default Dashboard;
