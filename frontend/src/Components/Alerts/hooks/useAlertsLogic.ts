import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { resetAlerts } from '../redux/actions';
import { getAlerts } from '../redux/selector';
import { ResetAlertsPayload } from '../redux/types';

export const useAlertsLogic = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [prevLocation, setPrevLocation] = useState(pathname);
  const alerts = useAppSelector(getAlerts);

  useEffect(() => {
    const isChangePage = prevLocation !== pathname;
    setPrevLocation(pathname);

    if (alerts && isChangePage) dispatch(resetAlerts());
    // TODO: Дописати стирання поштучно
    if (alerts && !isChangePage) setTimeout(() => dispatch(resetAlerts()), 3000);
  }, [alerts, dispatch, pathname, prevLocation]);

  const onCloseAtert = (data: ResetAlertsPayload) => {
    dispatch(resetAlerts(data));
  };

  return { alerts, onCloseAtert };
};
