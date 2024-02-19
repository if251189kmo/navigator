import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../../hooks/useRedux';
import { readFromStorage } from '../../../helpers/localStorageOperation';
import FullLocalStorage from '../../../constants/localStorage';
import { logout } from '../../../Pages/Login/redux/actions';
import { authButtonsCreator, navButtonsCreator } from '../utils';
import { ROUTES } from '../../../routes';

const { AUTH_TOKEN } = FullLocalStorage;
const { HOME } = ROUTES;

export const useHeaderLogic = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = !!readFromStorage(AUTH_TOKEN);

  const functions = {
    logout: () => {
      dispatch(logout());
      navigate(HOME);
    },
    navigate: (path: string) => navigate(`${HOME}${path}`),
  };

  const authButtons = authButtonsCreator(isAuth, functions);
  const navButtons = navButtonsCreator(isAuth, functions);

  return { authButtons, navButtons };
};
