type TabServer = {
  id: number;
  label: string;
  iconUrl: string;
  order: number;
  groups: { id: number; name: string; links: number[] }[];
};

export type { TabServer };
