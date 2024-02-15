import { asyncThunkWrapper } from '../../../Components/AxiosInterceptor/utils/asynkThunkWrapper';
import { instanceToken } from '../../../Components/AxiosInterceptor/utils/instance';

export const getTabsA = asyncThunkWrapper(async () => {
  await instanceToken.get('getTabsA');
});
