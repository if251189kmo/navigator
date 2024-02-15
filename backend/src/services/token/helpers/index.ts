import jwt from 'jsonwebtoken';
import { Users } from 'src/models/types';
import Roles from '../../../constant/roles';
import config from '../../../config';
import { AuthUser, Token, TokenPayload } from '../../types/token';

const { tokenKey } = config;
const { ADMIN } = Roles;

const decodeToken = (token: Token) => jwt.verify(token, tokenKey);

const createToken = ({ id, login, role }) => jwt.sign({ id, login, role }, tokenKey, { expiresIn: '24h' });

const findUser = ({ data }: Users, { login, password }: AuthUser) =>
  data.find((el) => el.login === login && el.password === password);

const verifyUser = ({ data }: Users, token: Token) => {
  const tokenWithoutBearer = token.split(' ')[1];
  const { login } = decodeToken(tokenWithoutBearer) as TokenPayload;

  return [ADMIN].includes(data.find((el) => el.login === login).role);
};

export { findUser, verifyUser, createToken };
