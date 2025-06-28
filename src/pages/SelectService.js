import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/SelectService.css"; // You can create custom styles here

const SelectService = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const services = [
    { name: "Bike", icon: "🛵", price: "₹ 320 - ₹ 391" },
    { name: "Auto", icon: "🚖", price: "₹ 200 - ₹ 300" },
    { name: "Auto Share", icon: "👥", price: "₹ 150 - ₹ 250" },
    { name: "Parcel", icon: "📦", price: "₹ 100 - ₹ 200" },
    { name: "Cab Economy", icon: "🚗", price: "₹ 524 - ₹ 641" },
    { name: "Cab Premium", icon: "✨🚙", price: "₹ 593 - ₹ 724" },
  ];

  const handleContinue = () => {
    if (!selected) return alert("Please select a service");

    const ride = JSON.parse(localStorage.getItem("ride")) || {};
    ride.service = selected;
    localStorage.setItem("ride", JSON.stringify(ride));

    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((s) => (
          <div
            key={s.name}
            className="col-md-4 mb-4"
            onClick={() => setSelected(s.name)}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`service-card card text-center p-4 ${
                selected === s.name ? "border-warning selected" : ""
              }`}
            >
              <div className="service-icon fs-1">{s.icon}</div>
              <h5 className="mt-3">{s.name}</h5>
              <p>{s.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-warning" onClick={handleContinue}>
          Continue Booking
        </button>
      </div>
    </div>
  );
};

export default SelectService;
