import { asyncThunkWrapper } from '../../../Components/AxiosInterceptor/utils/asynkThunkWrapper';
import { instance } from '../../../Components/AxiosInterceptor/utils/instance';
import urls from '../../../constants/urls';
import { setLinks } from '../redux/actions';

const { getAll } = urls.links;

export const fetchLinksAsync = asyncThunkWrapper(async (dispatch) => {
  const { data } = await instance.get(getAll);

  dispatch(setLinks(data));
});
