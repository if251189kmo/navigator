import { TabServer } from '../../../models/server/tab';
import { SET_TABS, AdminActions } from './types';

export const setTabs = (payload: TabServer[]): AdminActions => ({
  type: SET_TABS,
  payload,
});
