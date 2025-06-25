"use client";

import { useState } from "react";
import FireParticles from "./components/FireParticles";
import CharacterDisplay from "./components/CharacterDisplay";
import SearchForm from "./components/SearchForm";
import { CharacterProfile } from "@/types/battlenet";

export default function Home() {
  const [characterData, setCharacterData] = useState<CharacterProfile | null>(null);
  const [error, setError] = useState("");

  const handleSearchResult = (characterData: CharacterProfile | null, error: string) => {
    setCharacterData(characterData);
    setError(error);
  };

  return (
    <>
      <FireParticles />

      <div className="wow__search__container">
        <div className="wow__search__content">
          <h1 className="wow__search__title">World of Warcraft Players</h1>
          <SearchForm onSearch={handleSearchResult} />
        </div>
      </div>

      <CharacterDisplay characterData={characterData} error={error} />
    </>
  );
}
