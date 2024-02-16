import { SET_TABS, AdminActions, AdminState } from './types';

const initialState: AdminState = {
  tabs: [],
};

function adminReducer(state = initialState, action: AdminActions) {
  const { type, payload } = action;

  switch (type) {
    case SET_TABS:
      return { ...state, tabs: payload };

    default:
      return state;
  }
}

export default adminReducer;
