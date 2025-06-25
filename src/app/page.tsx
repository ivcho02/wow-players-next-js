"use client";

import { useState } from "react";
import FireParticles from "../components/FireParticles";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/battlenet/token');
      const data = await response.json();
      
      if (data.success) {
        // Token is now available for future API calls
        // You can store it in a global state or context if needed
        // For now, it's stored server-side and ready for use
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
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
            <button 
              onClick={handleSearch} 
              className="wow__search__button"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
