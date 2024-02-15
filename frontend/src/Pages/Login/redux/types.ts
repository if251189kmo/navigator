import Actions from '../../../constants/actions';
import { AuthUserServer, TokenServer } from '../../../models/server/login';

const { SET, DELETE } = Actions;

export const moduleName = 'auth';

export const SET_AUTH = `${moduleName}/${SET}`;
export const LOGOUT = `${moduleName}/${DELETE}`;

export type SetAuthUser = {
  type: typeof SET_AUTH;
  payload: TokenServer;
};

export type LogoutUser = {
  type: typeof LOGOUT;
  payload?: any;
};

export type LoginActions = SetAuthUser | LogoutUser;
export type LoginState = {
  isAuth: boolean;
  user: AuthUserServer;
  token?: TokenServer;
};
