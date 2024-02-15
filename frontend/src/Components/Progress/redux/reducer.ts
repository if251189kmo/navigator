import { SET_PROGRESS, ProgressActions, ProgressState } from './types';

const initialState: ProgressState = {
  progresses: { common: false },
};

function progressReducer(state = initialState, action: ProgressActions) {
  const { type, payload = 'common' } = action;
  const { progresses } = state;

  switch (type) {
    case SET_PROGRESS: {
      return {
        ...state,
        progresses: {
          ...progresses,
          [payload]: !progresses[payload],
        },
      };
    }
    default:
      return state;
  }
}

export default progressReducer;
