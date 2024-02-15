import { AlertNames } from '../../../../constants/alerts';
import {
  SetAlertsValidPayload,
  SetAlertsMessagePayload,
  AlertsState,
  ResetAlertsPayload,
} from '../types';

type ServerAlerts = SetAlertsValidPayload | SetAlertsMessagePayload;
type UiCommonAlerts = { id: number } & {
  instancePath?: SetAlertsValidPayload['instancePath'];
  message?: SetAlertsValidPayload['message'];
  data?: SetAlertsMessagePayload['data'];
  status?: SetAlertsMessagePayload['status'];
};

const addAlertsIds = (firstId: number, alerts: ServerAlerts[], name: AlertNames) =>
  alerts.map((alert, i) => ({
    ...alert,
    id: `${i + firstId}-${name}`,
  }));

const setAlerts = (state: AlertsState, name: AlertNames, payload: ServerAlerts[]) => {
  const { length } = state[name];

  return {
    ...state,
    [name]: [...state[name], ...addAlertsIds(length, payload, name)],
  };
};

const deleteAlert = (state: AlertsState, payload: ResetAlertsPayload) => {
  const { id, name } = payload;
  const array: { id: number }[] = state[name];

  return {
    ...state,
    [name]: array.filter((el) => el.id !== id),
  };
};

export { setAlerts, deleteAlert };
export type { UiCommonAlerts };
