"use client";

import { useState } from "react";
import FireParticles from "./components/FireParticles";
import CharacterDisplay from "./components/CharacterDisplay";
import SearchForm from "./components/SearchForm";
import { CharacterProfile } from "@/types/index";
import Image from "next/image";

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
          <div className="wow__search__logo">
            <Image
              src="/wow-logo.png"
              alt="World of Warcraft Logo"
              priority
              width={100}
              height={100}
            />
          </div>
          <h1 className="wow__search__title">World of Warcraft Players</h1>
          <SearchForm onSearch={handleSearchResult} />
        </div>
      </div>

      <CharacterDisplay characterData={characterData} error={error} />
    </>
  );
}
