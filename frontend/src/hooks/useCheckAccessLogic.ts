import { getAuthUser } from '../Pages/Login/redux/selector';
import { hasAdminAccess } from '../constants/roles';
import { useAppSelector } from './useRedux';

export const useCheckAccessLogic = () => {
  const user = useAppSelector(getAuthUser);
  const isAccess = user?.role ? hasAdminAccess.includes(user?.role) : false;

  return { isAccess };
};
