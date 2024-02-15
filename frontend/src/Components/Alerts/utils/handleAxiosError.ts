import { AxiosError, AxiosResponse } from 'axios';
import ResponceCodes from '../../../constants/response';
import { resetAlerts, setAlertsMessage } from '../redux/actions';
import { AppDispatch } from '../../../redux/store';

const { UNAUTHORIZED } = ResponceCodes;

const identifyError = (res: AxiosResponse, code?: ResponceCodes) => res.data === code;

const cleanErrors = (dispatch: AppDispatch, res: AxiosResponse, isAlerts: boolean) => {
  if (isAlerts) dispatch(resetAlerts());
  return res;
};

const dispatchError = (dispatch: AppDispatch, error: AxiosError) => {
  const { response, code } = error;

  if (response && identifyError(response as AxiosResponse, UNAUTHORIZED)) {
    const { data, status } = response as AxiosResponse;

    if (identifyError(response as AxiosResponse, UNAUTHORIZED))
      dispatch(setAlertsMessage({ data, status }));
    else dispatch(setAlertsMessage({ data: 'Неописане повідомлення', status }));
  } else {
    console.log(response, code);
    // dispatch(setAlertsMessage({ data: 'Неописане повідомлення', status: 404 }));
  }
};

export { dispatchError, cleanErrors };
