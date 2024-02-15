import { RootState } from '../../../redux/store';
import { TabUi } from '../../../models/ui/tab';

const root = (state: RootState) => state.tadsReducer;

const getTabs = (state: RootState): TabUi[] => root(state).tabs;

export { getTabs };
