import { CharacterProfile } from "@/types/battlenet";

interface CharacterDisplayProps {
  characterData: CharacterProfile | null;
  error: string;
}

export default function CharacterDisplay({ characterData, error }: CharacterDisplayProps) {
  if (error) {
    return (
      <div className="mt-5 text-center text-red-400 animate-slideInUp">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
          {error}
        </div>
      </div>
    );
  }

  if (!characterData) {
    return null;
  }

  return (
    <div className="mt-5 animate-slideInUp">
      <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-6 backdrop-blur-sm shadow-xl">
        {/* Character Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
            {characterData.name}
          </h2>
          <p className="text-gray-300 text-sm">
            {characterData.realm.name} • Level {characterData.level}
          </p>
        </div>

        {/* Character Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Class & Spec */}
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-400">Class</p>
                <p className="font-semibold text-white">{characterData.character_class.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-400">Specialization</p>
                <p className="font-semibold text-white">{characterData.active_spec.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-400">Faction</p>
                <p className="font-semibold text-white">{characterData.faction.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-400">Item Level</p>
                <p className="font-semibold text-white">{characterData.equipped_item_level}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-400">Achievement Points</p>
                <p className="font-semibold text-white">{characterData.achievement_points.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {characterData.guild && (
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-400">Guild</p>
                  <p className="font-semibold text-white">{characterData.guild.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Average Item Level:</span>
              <span className="text-white font-medium">{characterData.average_item_level}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Last Login:</span>
              <span className="text-white font-medium">
                {new Date(characterData.last_login_timestamp).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 