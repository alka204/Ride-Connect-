// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import AboutUs from "./pages/AboutUs.js";
import Safety from "./pages/Safety.js";
import Blog from "./pages/Blog.js";
import ContactUs from "./pages/ContactUs.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard.js";
import SelectService from "./pages/SelectService.js";

// Layout Components
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

// Custom Components
import BookingSection from "./components/BookingSection.js";
import Home from "./pages/Home.js";
import BookAuto from "./components/BookAuto.js";

// Global Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/global.css";
import "./styles/SelectService.css";



function App() {
  return (
    <>
      <Navbar />

      <main className="flex-shrink-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <BookingSection />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/safety"
            element={
              <ProtectedRoute>
                <Safety />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />

          <Route path="/select-service" element={<SelectService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/book" element={<BookAuto />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
