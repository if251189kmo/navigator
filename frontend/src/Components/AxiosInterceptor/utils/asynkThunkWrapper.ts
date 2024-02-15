import { AxiosError } from 'axios';
import { ThinkAsync } from '../../../redux/store';
import { setProgress } from '../../Progress/redux/actions';
import { dispatchError } from '../../Alerts/utils/handleAxiosError';
import { Args, AsyncHandler } from '../types';

const asyncThunkWrapper = <T>(asyncHandler: AsyncHandler<T>): ((...args: Args) => ThinkAsync) => {
  return (...args: Args): ThinkAsync =>
    async (dispatch) => {
      try {
        dispatch(setProgress());
        await asyncHandler(dispatch, ...args);
      } catch (error) {
        dispatchError(dispatch, error as AxiosError);
      } finally {
        dispatch(setProgress());
      }
    };
};

export { asyncThunkWrapper };
