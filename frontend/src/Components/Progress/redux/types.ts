import ACTIONS from '../../../constants/actions';

const { SET } = ACTIONS;

export const moduleName = 'progress';

export const SET_PROGRESS = `${moduleName}/${SET}`;

export type SetProgress = {
  type: typeof SET_PROGRESS;
  payload?: string;
};

export type ProgressActions = SetProgress;
export type ProgressState = {
  progresses: {
    common: boolean;
    [key: string]: boolean;
  };
};
