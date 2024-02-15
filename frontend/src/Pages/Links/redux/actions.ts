import { LinkServer } from '../../../models/server/link';
import { SET_LINKS, LinksActions } from './types';

export const setLinks = (payload: LinkServer[]): LinksActions => ({
  type: SET_LINKS,
  payload,
});
