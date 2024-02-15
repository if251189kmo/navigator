import Actions from '../../../constants/actions';
import { TabServer } from '../../../models/server/tab';

const { SET } = Actions;

export const moduleName = 'tabs';

export const SET_TABS = `${moduleName}/${SET}`;

export type SetTabs = {
  type: typeof SET_TABS;
  payload: TabServer[];
};

export type TabsActions = SetTabs;
export type TabsState = {
  tabs: TabServer[];
};
