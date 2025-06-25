"use client";

import { useState } from "react";
import { CharacterProfile } from "@/types/battlenet";

interface SearchFormProps {
    onSearch: (characterData: CharacterProfile | null, error: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const scrollToResults = () => {
        const resultsElement = document.querySelector('.wow__results__container');

        if (resultsElement) {
            resultsElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;

        setIsLoading(true);

        try {
            // For now, we'll use a default realm (ravencrest) and the search query as character name
            // In a real app, you'd want to parse realm/character from the input or have separate fields
            const realm = "ravencrest";
            const characterName = searchQuery.trim().toLowerCase();
            const locale = "en_US";

            const response = await fetch(`/api/battlenet/character/${realm}/${characterName}/${locale}`);
            const data = await response.json();

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
            />
            <button
                onClick={handleSearch}
                className="wow__search__button"
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Search"}
            </button>
        </div>
    );
} 