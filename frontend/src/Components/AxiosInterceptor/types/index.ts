import { AppDispatch } from '../../../redux/store';

type Args = any[];
type AsyncHandler<T> = (dispatch: AppDispatch, ...args: Args) => Promise<T>;

export type { Args, AsyncHandler };
