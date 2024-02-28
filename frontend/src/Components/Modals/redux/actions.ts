import { SET_OPEN_MODAL, ModalsActions } from './types';

export const setOpenModal = (payload: string): ModalsActions => ({
  type: SET_OPEN_MODAL,
  payload,
});
