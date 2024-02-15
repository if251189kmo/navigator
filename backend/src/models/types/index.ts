import Roles from '../../constant/roles';

export type User = {
  id: number;
  role: Roles.ADMIN;
  login: string;
  password: string;
};

export type Link = {
  id: number;
  code?: number;
  label: string;
  url: string;
  new: boolean;
  order: number;
};

export type Tab = {
  id: number;
  label: string;
  iconUrl: string;
  order: number;
  groups: {
    id: number;
    name: string;
    linksIds: Link['id'][];
  }[];
};

type LastUpdated = { lastUpdatedAt: string; lastUpdatedBy: string };
export type Links = { data: Link[] } & LastUpdated;
export type Users = { data: User[] } & LastUpdated;
export type Tabs = { data: Tab[] } & LastUpdated;

export type Models = { data: ModelItem[] } & LastUpdated;
export type ModelItem = Link | Tab | User;
export type ModelItemId = Link['id'] | Tab['id'] | User['id'];
