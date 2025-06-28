import React, { useState } from "react";

const Safety = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [sosSent, setSosSent] = useState(false);

  // List of safety tips
  const safetyTips = [
    "Always wear your seatbelt while riding.",
    "Share your ride details with a friend or family member.",
    "Make sure the driver is verified and the car is registered.",
    "If you feel uncomfortable, immediately cancel the ride.",
    "Report any suspicious behavior or issues immediately.",
  ];

  // Function to get the user's location and trigger SOS
  const handleSOS = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          sendSOS(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          alert("Unable to fetch location. Please try again.");
          setIsLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  };

  // Function to send SOS (for now, just an alert, replace with actual API)
  const sendSOS = (lat, lon) => {
    setSosSent(true);
    alert(`SOS Alert Sent! Location: Latitude: ${lat}, Longitude: ${lon}`);
    console.log("Sending SOS to contacts or emergency services...");
    setIsLoading(false);
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Safety</h1>
      <p>
        Your safety is our top priority. Learn how we ensure secure and
        comfortable rides for everyone.
      </p>

      <div className="safety-tips">
        <h3>Safety Tips</h3>
        <ul className="list-unstyled">
          {safetyTips.map((tip, index) => (
            <li key={index} className="alert alert-info safety-tip">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="sos-section mt-4">
        <h3>Emergency SOS</h3>
        <p>If you're in danger, click below to send an emergency alert.</p>
        <button
          className={`btn btn-danger ${isLoading ? "loading" : ""}`}
          onClick={handleSOS}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send SOS Alert"}
        </button>
        {sosSent && (
          <div className="alert alert-success mt-3">
            <strong>Success!</strong> Your SOS has been sent successfully.
          </div>
        )}
      </div>

      {location && (
        <div className="mt-3">
          <p>
            <strong>Location:</strong> Latitude: {location.lat}, Longitude:{" "}
            {location.lon}
          </p>
        </div>
      )}
    </div>
  );
};

export default Safety;
