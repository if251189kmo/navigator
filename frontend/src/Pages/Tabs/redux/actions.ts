import { TabServer } from '../../../models/server/tab';
import { SET_TABS, TabsActions } from './types';

export const setTabs = (payload: TabServer[]): TabsActions => ({
  type: SET_TABS,
  payload,
});
