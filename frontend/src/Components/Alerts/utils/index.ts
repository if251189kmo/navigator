import { AlertNames, AlertTypes } from '../../../constants/alerts';
import ResponceCodes from '../../../constants/response';
import labels from '../../../labels/Components/Alerts/index.json';
import { UiCommonAlerts } from '../redux/helpers/reducer';

const { ERROR, INFO, WARNING, DONE } = AlertTypes;
const { SUCCES, UNAUTHORIZED, VALIDATION, BAD_REQUEST, INTERNAL_SERVER, NOT_FOUND } = ResponceCodes;

const errors = [UNAUTHORIZED, BAD_REQUEST, INTERNAL_SERVER, NOT_FOUND];
const done = [SUCCES];
const warnings = [VALIDATION];

const checkCode = (code?: ResponceCodes) => code || VALIDATION;

const checkMessage = (message: string = SUCCES) => {
  if (ResponceCodes[message as keyof typeof ResponceCodes])
    return labels[message as keyof typeof labels].message;
  return message;
};

const checkType = (type: ResponceCodes) => {
  if (errors.includes(type)) return ERROR;
  if (warnings.includes(type)) return WARNING;
  if (done.includes(type)) return DONE;
  return INFO;
};

const modifyAlert = (name: AlertNames, alert: UiCommonAlerts) => {
  const { id, data, instancePath: path, message } = alert;

  return {
    id,
    name,
    path,
    message: checkMessage(data || message),
    code: checkCode(data as ResponceCodes),
    type: checkType((data as ResponceCodes) || VALIDATION),
  };
};

export { checkType, modifyAlert };
