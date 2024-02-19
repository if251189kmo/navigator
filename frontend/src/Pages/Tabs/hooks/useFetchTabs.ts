import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchTabsAsync } from '../api';
import { setTabs } from '../redux/actions';
import { getTabs } from '../redux/selector';

export const useFetchTabs = () => {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector(getTabs);

  useEffect(() => {
    dispatch(fetchTabsAsync());
    return () => {
      setTabs([]);
    };
  }, [dispatch]);

  return { tabs };
};
