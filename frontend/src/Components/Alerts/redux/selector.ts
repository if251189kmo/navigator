import { AlertNames } from '../../../constants/alerts';
import { RootState } from '../../../redux/store';
import { modifyAlert } from '../utils';

const { MESSAGE, VALID } = AlertNames;

const root = (state: RootState) => state.alertsReducer;

const getAlertsMessage = (state: RootState) => {
  const messages = root(state)[MESSAGE];

  return messages.map((message) => modifyAlert(MESSAGE, message));
};

const getAlertsValid = (state: RootState) => {
  const validations = root(state)[VALID];

  return validations.map((validation) => modifyAlert(VALID, validation));
};

const getAlerts = (state: RootState) => {
  const message = getAlertsMessage(state);
  const valid = getAlertsValid(state);
  const isAlerts = message.length > 0 || valid.length > 0;

  if (isAlerts) return [...message, ...valid];
  return undefined;
};

export { getAlerts, getAlertsMessage };
