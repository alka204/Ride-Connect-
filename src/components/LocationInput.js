import React, { useState, useEffect } from "react";

const LocationInput = ({ inputId, suggestionId, setLocation }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const input = document.getElementById(inputId);
    const suggestionsElement = document.getElementById(suggestionId);

    const handleInput = async () => {
      const query = input.value;
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch(
          `https://photon.komoot.io/api/?q=${query}&limit=5&lang=en`
        );
        const data = await response.json();
        setSuggestions(data.features);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    };

    const handleClickOutside = (e) => {
      if (!suggestionsElement.contains(e.target) && !input.contains(e.target)) {
        setSuggestions([]);
      }
    };

    input.addEventListener("input", handleInput);
    document.addEventListener("click", handleClickOutside);

    return () => {
      input.removeEventListener("input", handleInput);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputId, suggestionId]);

  const handleSelection = (feature) => {
    const fullLocation = `${feature.properties.name}, ${
      feature.properties.city || ""
    }, ${feature.properties.country || ""}`;
    const input = document.getElementById(inputId);
    input.value = fullLocation;
    setLocation(fullLocation);
    setSuggestions([]);

    console.log(`📍 Selected coordinates:`, feature.geometry.coordinates);
  };

  return (
    <div className="position-relative w-100">
      <input
        type="text"
        id={inputId}
        placeholder="Enter Location"
        className="form-control location-input"
        autoComplete="off"
      />
      <ul id={suggestionId} className="list-group location-suggestions">
        {suggestions.map((feature, index) => (
          <li
            key={index}
            className="list-group-item suggestion-item"
            onClick={() => handleSelection(feature)}
          >
            {`${feature.properties.name}, ${feature.properties.city || ""}, ${
              feature.properties.country || ""
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInput;
