import { SET_OPEN_MODAL, ModalsActions, ModalsState } from './types';

const initialState: ModalsState = {};

function progressReducer(state = initialState, action: ModalsActions) {
  switch (action.type) {
    case SET_OPEN_MODAL: {
      return state;
    }
    default:
      return state;
  }
}

export default progressReducer;
