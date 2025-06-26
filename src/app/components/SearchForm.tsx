"use client";

import { useState } from "react";
import { CharacterProfile } from "@/types/index";

interface SearchFormProps {
  onSearch: (characterData: CharacterProfile | null, error: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollToResults = () => {
    setTimeout(() => {
      const resultsElement = document.querySelector('.wow__results__container');

      if (resultsElement) {
        resultsElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 500);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);

    try {
      const startTime = Date.now();
      const minLoadingTime = 1000;

      const realm = "ravencrest";
      const characterName = searchQuery.trim().toLowerCase();
      const locale = "en_US";

      const response = await fetch(`/api/battlenet/character/${realm}/${characterName}/${locale}`);
      const data = await response.json();

      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }

      if (data.success) {
        onSearch(data.character, "");
        scrollToResults();
      } else {
        onSearch(null, data.error || 'Failed to fetch character data');
        scrollToResults();
      }
    } catch {
      onSearch(null, 'Failed to fetch character data');
      scrollToResults();
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
    <div className="wow__search__form">
      <input
        type="text"
        placeholder="Enter player name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="wow__search__field"
        disabled={isLoading}
      />
      <button
        onClick={handleSearch}
        className="wow__search__button"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="wow__loading">
            <span className="wow__loading__spinner"></span>
            Searching...
          </span>
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
} 