import FullLocalStorage from '../../../constants/localStorage';
import { Roles } from '../../../constants/roles';
import { decodeToken } from '../../../helpers/decodeToken';
import { readFromStorage } from '../../../helpers/localStorageOperation';

const { AUTH_TOKEN } = FullLocalStorage;

export const usePrivateRouteLogic = (roles: Roles[]) => {
  const authUser = decodeToken(readFromStorage(AUTH_TOKEN)) as { role: Roles };
  const isAuthenticated = !!authUser && roles && roles.includes(authUser.role);

  return { isAuthenticated };
};
