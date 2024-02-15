import { SET_LINKS, LinksActions, LinksState } from './types';

const initialState: LinksState = {
  links: [],
};

function linksReducer(state = initialState, action: LinksActions) {
  const { type, payload } = action;

  switch (type) {
    case SET_LINKS:
      return { ...state, links: payload };

    default:
      return state;
  }
}

export default linksReducer;
