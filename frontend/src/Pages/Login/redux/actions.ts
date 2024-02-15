import { TokenServer } from '../../../models/server/login';
import { LoginActions, SET_AUTH, LOGOUT } from './types';

export const setAuth = (payload: TokenServer): LoginActions => ({
  type: SET_AUTH,
  payload,
});

export const logout = (): LoginActions => ({
  type: LOGOUT,
  payload: undefined,
});
