import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from '../../../routes';

const { TABS, LINKS, LOGIN, ADMINISTRATION } = ROUTES;

type Functions = { logout: VoidFunction; navigate: (path: string) => void };

const authButtonsCreator = (isAuth: boolean, functions: Functions) => {
  const { logout, navigate } = functions;

  return [
    isAuth
      ? {
          variant: 'outlined' as const,
          size: 'large' as const,
          icon: LogoutIcon,
          color: 'error' as const,
          onClick: logout,
        }
      : {
          icon: LoginIcon,
          variant: 'outlined' as const,
          size: 'large' as const,
          color: 'success' as const,
          onClick: () => navigate(LOGIN),
        },
  ];
};

const navButtonsCreator = (isAuth: boolean, functions: Functions) => {
  const { navigate } = functions;

  return [
    ...(isAuth
      ? [
          {
            label: 'Administration',
            fullWidth: false,
            icon: LogoutIcon,
            color: 'success' as const,
            onClick: () => navigate(ADMINISTRATION),
          },
        ]
      : []),
    {
      label: 'Tabs',
      fullWidth: false,
      icon: LogoutIcon,
      color: 'success' as const,
      onClick: () => navigate(TABS),
    },
    {
      label: 'Links',
      fullWidth: false,
      icon: LogoutIcon,
      color: 'success' as const,
      onClick: () => navigate(LINKS),
    },
  ];
};

export { navButtonsCreator, authButtonsCreator };
