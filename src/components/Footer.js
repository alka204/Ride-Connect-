import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row justify-content-between">
          {/* Company Section */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/safety" className="text-white text-decoration-none">
                  Safety
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/help" className="text-white text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-start">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-muted small">BAG 01/03/2023</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-muted small mb-0">
              &copy; 2023 ShareMyRide. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
