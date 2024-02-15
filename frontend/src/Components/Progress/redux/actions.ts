import { SET_PROGRESS, ProgressActions } from './types';

export const setProgress = (payload?: string): ProgressActions => ({
  type: SET_PROGRESS,
  payload,
});
