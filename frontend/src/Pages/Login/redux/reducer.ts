import FullLocalStorage from '../../../constants/localStorage';
import { decodeToken } from '../../../helpers/decodeToken';
import {
  readFromStorage,
  removeFromStorage,
  writeToStorage,
} from '../../../helpers/localStorageOperation';
import { SET_AUTH, LOGOUT, LoginActions, LoginState } from './types';

const { AUTH_TOKEN } = FullLocalStorage;
const token = readFromStorage(AUTH_TOKEN);

const defUser = {
  exp: undefined,
  iat: undefined,
  id: undefined,
  login: undefined,
  role: undefined,
};

const initialState: LoginState = {
  isAuth: !!token,
  user: decodeToken(token) || defUser,
  token,
};

function authReducer(state = initialState, action: LoginActions) {
  const { payload, type } = action;

  switch (type) {
    case SET_AUTH:
      writeToStorage(FullLocalStorage.AUTH_TOKEN, payload);

      return {
        ...state,
        token: payload,
        isAuth: !!payload,
        user: decodeToken(payload),
      };

    case LOGOUT:
      removeFromStorage(FullLocalStorage.AUTH_TOKEN);

      return {
        ...state,
        token: payload,
        isAuth: !!payload,
        user: decodeToken(payload),
      };

    default:
      return state;
  }
}

export default authReducer;
