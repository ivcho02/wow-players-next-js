import { CharacterProfile } from "@/types/battlenet";

interface CharacterDisplayProps {
  characterData: CharacterProfile | null;
  error: string;
}

export default function CharacterDisplay({ characterData, error }: CharacterDisplayProps) {
  if (error) {
    return (
      <div style={{ color: '#ff6b6b', marginTop: '20px', textAlign: 'center' }}>
        {error}
      </div>
    );
  }

  if (!characterData) {
    return null;
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'left', color: '#ededed' }}>
      <h2 style={{ color: '#ffd700', marginBottom: '10px' }}>
        {characterData.name} - {characterData.realm.name}
      </h2>
      <p><strong>Level:</strong> {characterData.level}</p>
      <p><strong>Class:</strong> {characterData.character_class.name}</p>
      <p><strong>Spec:</strong> {characterData.active_spec.name}</p>
      <p><strong>Faction:</strong> {characterData.faction.name}</p>
      <p><strong>Item Level:</strong> {characterData.equipped_item_level}</p>
      {characterData.guild && (
        <p><strong>Guild:</strong> {characterData.guild.name}</p>
      )}
    </div>
  );
} 