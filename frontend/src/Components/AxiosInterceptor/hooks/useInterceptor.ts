import LocalStorage from '../../../constants/localStorage';
import { readFromStorage } from '../../../helpers/localStorageOperation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getAlerts } from '../../Alerts/redux/selector';
import { cleanErrors } from '../../Alerts/utils/handleAxiosError';
import { instanceToken, instance } from '../utils/instance';

const { AUTH_TOKEN } = LocalStorage;

export const useInterceptor = () => {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector(getAlerts);
  const isAlerts = alerts?.length !== 0;

  instance.interceptors.request.use((config) => config);
  instanceToken.interceptors.request.use((config) => {
    const token = `${readFromStorage(AUTH_TOKEN)}`;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  instance.interceptors.response.use((res) => cleanErrors(dispatch, res, isAlerts));
  instanceToken.interceptors.response.use((res) => cleanErrors(dispatch, res, isAlerts));
};
