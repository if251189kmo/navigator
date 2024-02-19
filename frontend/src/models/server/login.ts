import { Roles } from '../../constants/roles';

type TokenServer = string;
type AuthUserServer = {
  exp?: number;
  iat?: number;
  id?: number;
  login?: string;
  role?: Roles;
};

export type { AuthUserServer, TokenServer };
