import { asyncThunkWrapper } from '../../../Components/AxiosInterceptor/utils/asynkThunkWrapper';
import { instance } from '../../../Components/AxiosInterceptor/utils/instance';
import { setTabs } from '../redux/actions';

export const fetchAdminTabsAsync = asyncThunkWrapper(async (dispatch) => {
  const { data } = await instance.get('/navigator/tabs');

  dispatch(setTabs(data));
});

export const fetchAdminLinksAsync = asyncThunkWrapper(async () => {
  await instance.get('/navigator/links');
});
