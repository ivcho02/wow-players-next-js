import { CharacterProfile } from "@/types/index";

interface CharacterDisplayProps {
  characterData: CharacterProfile | null;
  error: string;
}

export default function CharacterDisplay({ characterData, error }: CharacterDisplayProps) {
  if (error) {
    return (
      <div className="wow__results__container flex justify-center items-center min-h-[40vh]">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm text-red-400 text-center w-full max-w-md">
          {error}
        </div>
      </div>
    );
  }

  if (!characterData) {
    return null;
  }

  const characterDataDisplay = {
    'Character Name': characterData.name,
    'Realm': characterData.realm.name,
    'Level': characterData.level,
    'Gender': characterData.gender.name,
    'Achievement Points': characterData.achievement_points,
    'Faction': characterData.faction.name,
    'Class': characterData.character_class.name,
    'Race': characterData.race.name,
    'Spec': characterData.active_spec.name
  };

  return (
    <div className="wow__results__container flex justify-center items-center min-h-[40vh] py-8">
      <div className="wow__results__content flex flex-col items-center justify-center">
        {Object.entries(characterDataDisplay).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center justify-center">
            <p className="wow__results-label">{key}</p>
            <h1 className="wow__results-value">{value}</h1>
          </div>
          ))}
      </div>
    </div>
  );
} 