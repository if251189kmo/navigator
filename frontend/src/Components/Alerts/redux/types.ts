import Actions from '../../../constants/actions';
import { AlertNames } from '../../../constants/alerts';

const { MESSAGE, VALID } = AlertNames;
const { SET, RESET } = Actions;

export const moduleName = 'alerts';

export const SET_ALERTS_MESSAGE = `${moduleName}/${SET}/MESSAGE`;
export const SET_ALERTS_VALID = `${moduleName}/${SET}/VALID`;
export const RESET_ALERTS = `${moduleName}/${RESET}`;

export type ResetAlertsPayload = { name: AlertNames; id: number };
export type SetAlertsMessagePayload = { data: string; status: number };
export type SetAlertsValidPayload = { instancePath: string; message: string };

export type SetAlertsMessage = {
  type: typeof SET_ALERTS_MESSAGE;
  payload: SetAlertsMessagePayload;
};

export type SetAlertsValid = {
  type: typeof SET_ALERTS_VALID;
  payload: SetAlertsValidPayload[];
};

export type ResetAlerts = {
  type: typeof RESET_ALERTS;
  payload?: ResetAlertsPayload;
};

export type AlertsActions = SetAlertsMessage | SetAlertsValid | ResetAlerts;

export type AlertsState = {
  [MESSAGE]: ({ id: number } & SetAlertsMessagePayload)[];
  [VALID]: ({ id: number } & SetAlertsValidPayload)[];
};
