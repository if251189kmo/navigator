import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchLinksAsync } from '../api';
import { setLinks } from '../redux/actions';
import { getLinks } from '../redux/selector';

export const useFetchLinks = () => {
  const dispatch = useAppDispatch();
  const links = useAppSelector(getLinks);

  useEffect(() => {
    dispatch(fetchLinksAsync());
    return () => {
      setLinks([]);
    };
  }, [dispatch]);

  return { links };
};
