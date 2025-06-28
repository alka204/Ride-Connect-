import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Contact Us</h1>
      <p>Need help or have feedback? Reach out to us anytime:</p>

      <div className="social-links">
        <p>
          <a
            href="mailto:your-email@gmail.com"
            className="btn btn-outline-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i> Gmail
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            className="btn btn-outline-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/your-github-profile/"
            className="btn btn-outline-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
