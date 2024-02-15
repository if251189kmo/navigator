import Actions from '../../../constants/actions';
import { LinkServer } from '../../../models/server/link';

const { SET } = Actions;

export const moduleName = 'links';

export const SET_LINKS = `${moduleName}/${SET}`;

export type SetLinks = {
  type: typeof SET_LINKS;
  payload: LinkServer[];
};

export type LinksActions = SetLinks;
export type LinksState = {
  links: LinkServer[];
};
