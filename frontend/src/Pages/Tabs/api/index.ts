import { setTabs } from '../redux/actions';
import { asyncThunkWrapper } from '../../../Components/AxiosInterceptor/utils/asynkThunkWrapper';
import { instance } from '../../../Components/AxiosInterceptor/utils/instance';
import urls from '../../../constants/urls';

const { getAll } = urls.tabs;

export const fetchTabsAsync = asyncThunkWrapper(async (dispatch) => {
  const { data } = await instance.get(getAll);

  dispatch(setTabs(data));
});
