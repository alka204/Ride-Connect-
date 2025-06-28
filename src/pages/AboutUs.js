import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4"></h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Carpool"
            className="img-fluid"
            style={{ maxWidth: "50%" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold text-warning">Our Mission</h4>
          <p>
            At <strong>ShareMyRide</strong>, our goal is to make commuting more
            affordable, eco-friendly, and social by helping people share rides
            and split costs. Whether you're a daily office-goer or an occasional
            traveler, we’ve got you covered.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
          <h5 className="fw-bold">Safe & Verified</h5>
          <p>
            We only allow verified users and drivers to ensure your safety
            during rides.
          </p>
        </div>
        <div className="col-md-4">
          <i className="fas fa-clock fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Flexible Booking</h5>
          <p>
            Book a ride instantly or schedule in advance. Convenience is our
            priority.
          </p>
        </div>
        <div className="col-md-4">
          <i className="fas fa-leaf fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Eco-Friendly</h5>
          <p>Reduce carbon emissions by sharing your ride with others.</p>
        </div>
      </div>

      <div className="text-center">
        <h4 className="fw-bold text-warning">Why We Built This</h4>
        <p>
          We observed how many autos and cabs ran half-empty, and how people
          struggled with rising travel costs. That’s when the idea of
          ShareMyRide came to life – a smart way to move together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
