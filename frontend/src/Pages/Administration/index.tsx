import { useEffect } from 'react';
import { getTabsA } from './api';
import { useAppDispatch } from '../../hooks/useRedux';

function Administration() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTabsA());
  });

  return (
    <div>
      <h1>Administration</h1>
      <p>Адміністація</p>
    </div>
  );
}

export default Administration;
