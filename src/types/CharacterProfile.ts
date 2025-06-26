export interface CharacterProfile {
  _links: {
    self: {
      href: string;
    };
  };
  id: number;
  name: string;
  gender: {
    type: string;
    name: string;
  };
  faction: {
    type: string;
    name: string;
  };
  character_class: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  active_spec: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  race: {
    key: {
      href: string;
    };
    name: string;
    id: number;
  };
  realm: {
    key: {
      href: string;
    };
    name: string;
    id: number;
    slug: string;
  };
  guild?: {
    key: {
      href: string;
    };
    name: string;
    id: number;
    realm: {
      key: {
        href: string;
      };
      name: string;
      id: number;
      slug: string;
    };
  };
  level: number;
  experience: number;
  achievement_points: number;
  achievements: {
    href: string;
  };
  titles: {
    href: string;
  };
  pvp_summary: {
    href: string;
  };
  encounters: {
    href: string;
  };
  media: {
    href: string;
  };
  last_login_timestamp: string;
  average_item_level: number;
  equipped_item_level: number;
  specializations: {
    href: string;
  };
  statistics: {
    href: string;
  };
  mythic_keystone_profile: {
    href: string;
  };
  equipment: {
    href: string;
  };
  appearance: {
    href: string;
  };
  collections: {
    href: string;
  };
} 