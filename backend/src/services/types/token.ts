import Roles from '../../constant/roles';

export type AuthUser = { login: string; password: string };
export type Token = string;
export type TokenPayload = {
  id: number;
  login: string;
  role: Roles;
  iat: number;
  exp: number;
};
