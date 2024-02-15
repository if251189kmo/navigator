import { name } from '../../package.json';

enum LocalStorage {
  AUTH_TOKEN = 'AUTH_TOKEN',
}

const { AUTH_TOKEN } = LocalStorage;
const FullLocalStorage = { [AUTH_TOKEN]: `${name}: ${AUTH_TOKEN}` };

export default FullLocalStorage;
