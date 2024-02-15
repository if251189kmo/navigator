import {
  ResetAlerts,
  ResetAlertsPayload,
  RESET_ALERTS,
  SetAlertsMessage,
  SetAlertsMessagePayload,
  SetAlertsValid,
  SetAlertsValidPayload,
  SET_ALERTS_MESSAGE,
  SET_ALERTS_VALID,
} from './types';

export const setAlertsMessage = (payload: SetAlertsMessagePayload): SetAlertsMessage => ({
  type: SET_ALERTS_MESSAGE,
  payload,
});

export const setAlertsValid = (payload: SetAlertsValidPayload[]): SetAlertsValid => ({
  type: SET_ALERTS_VALID,
  payload,
});

export const resetAlerts = (payload?: ResetAlertsPayload): ResetAlerts => ({
  type: RESET_ALERTS,
  payload,
});
