import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from '../../constant/httpStatus';
import { Users } from '../../models/types';
import { createToken, findUser, verifyUser } from './helpers';

const { UNAUTHORIZED } = HttpStatus;

const tokenServices = (data: Users) => {
  return {
    authorizing: (req: Request, res: Response) => {
      const user = req.body;
      const findedUser = findUser(data, user);

      try {
        return res.status(200).json(createToken(findedUser));
      } catch (err) {
        return res.status(401).send(UNAUTHORIZED);
      }
    },

    verify: (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;

      try {
        verifyUser(data, token);
        return next();
      } catch (err) {
        return res.status(401).send(UNAUTHORIZED);
      }
    },
  };
};

export default tokenServices;
