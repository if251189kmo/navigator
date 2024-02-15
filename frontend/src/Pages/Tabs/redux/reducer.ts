import { SET_TABS, TabsActions, TabsState } from './types';

const initialState: TabsState = {
  tabs: [],
};

function tabsReducer(state = initialState, action: TabsActions) {
  const { type, payload } = action;

  switch (type) {
    case SET_TABS:
      return { ...state, tabs: payload };

    default:
      return state;
  }
}

export default tabsReducer;
