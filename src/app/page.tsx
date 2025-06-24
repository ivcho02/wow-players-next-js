"use client";

import { useState } from "react";
import FireParticles from "../components/FireParticles";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // TODO: Implement search functionality
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <FireParticles />
      
      <div className="wow__search__container">
        <div className="wow__search__content">
          <h1 className="wow__search__title">World of Warcraft Players</h1>
          <div className="wow__search__form">
            <input
              type="text"
              placeholder="Enter player name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="wow__search__field"
            />
            <button onClick={handleSearch} className="wow__search__button">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
