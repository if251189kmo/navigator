import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchAdminTabsAsync, fetchAdminLinksAsync } from '../api';
import { getTabs } from '../redux/selector';

export const useAdministrationLogic = () => {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector(getTabs);

  useEffect(() => {
    dispatch(fetchAdminTabsAsync());
    dispatch(fetchAdminLinksAsync());
  }, [dispatch]);

  return { tabs };
};
