import Actions from '../../../constants/actions';
import { TabServer } from '../../../models/server/tab';

const { SET } = Actions;

export const moduleName = 'admin';

export const SET_TABS = `${moduleName}/TABS/${SET}`;

export type SetTabs = {
  type: typeof SET_TABS;
  payload: TabServer[];
};

export type AdminActions = SetTabs;
export type AdminState = {
  tabs: TabServer[];
};
