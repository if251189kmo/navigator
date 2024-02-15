import ModelNames from '../../constant/modelNames';
import { readJsonSync } from '../../models/helpers';
import tokenServices from '../../services/token';

const { USERS } = ModelNames;

const initAuthController = async () => {
  const data = await readJsonSync(USERS);

  return {
    authorization: tokenServices(data).authorizing,
    veryfication: tokenServices(data).verify,
  };
};

export default initAuthController;
