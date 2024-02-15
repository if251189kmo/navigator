import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTES } from '../routes';

const { HOME, TABS } = ROUTES;

export const useRedirectInToTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === HOME) navigate(`${HOME}${TABS}`);
  }, [pathname, navigate]);
};
