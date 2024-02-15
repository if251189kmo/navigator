import { TabServer } from '../server/tab';

type Groups = TabServer['groups'];
type IconUrl = TabServer['iconUrl'];
type Id = TabServer['id'];
type Label = TabServer['label'];
type Order = TabServer['order'];

type TabUi = {
  groups: Groups;
  iconUrl: IconUrl;
  id: Id;
  label: Label;
  order: Order;
};

export type { TabUi };
