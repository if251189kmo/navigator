import { AlertNames } from '../../../constants/alerts';
import { deleteAlert, setAlerts } from './helpers/reducer';
import {
  SET_ALERTS_MESSAGE,
  SET_ALERTS_VALID,
  AlertsActions,
  AlertsState,
  RESET_ALERTS,
  SetAlertsValidPayload,
  ResetAlertsPayload,
  SetAlertsMessagePayload,
} from './types';

const { MESSAGE, VALID } = AlertNames;

const initialState: AlertsState = { [MESSAGE]: [], [VALID]: [] };

function alertsReducer(state = initialState, action: AlertsActions) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERTS_MESSAGE: {
      return setAlerts(state, MESSAGE, [payload] as SetAlertsMessagePayload[]);
    }
    case SET_ALERTS_VALID: {
      return setAlerts(state, VALID, payload as SetAlertsValidPayload[]);
    }

    case RESET_ALERTS: {
      if (!payload) return { ...state, [MESSAGE]: [], [VALID]: [] };
      return deleteAlert(state, payload as ResetAlertsPayload);
    }

    default:
      return state;
  }
}

export default alertsReducer;
