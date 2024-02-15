import { asyncThunkWrapper } from '../../../Components/AxiosInterceptor/utils/asynkThunkWrapper';
import { instance } from '../../../Components/AxiosInterceptor/utils/instance';
import urls from '../../../constants/urls';
import { setAuth } from '../redux/actions';

const { auth } = urls.login;

export const authAsync = asyncThunkWrapper(async (dispatch, form) => {
  const { data } = await instance.post(auth, form);

  dispatch(setAuth(data));
});
