import ACTIONS from '../../../constants/actions';

const { SET } = ACTIONS;

export const moduleName = 'modal';

export const SET_OPEN_MODAL = `${moduleName}/${SET}/"open`;

export type SetOpenModal = {
  type: typeof SET_OPEN_MODAL;
  payload: string;
};

export type ModalsActions = SetOpenModal;
export type ModalsState = {};
