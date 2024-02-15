import { NextFunction, Request, Response } from 'express';
import initAuthController from '../../controllers/auth';

const asyncVeryfication = async (req: Request, res: Response, next: NextFunction) => {
  const { veryfication } = await initAuthController();
  return veryfication(req, res, next);
};

const asyncAuthorization = async (req: Request, res: Response) => {
  const { authorization } = await initAuthController();
  return authorization(req, res);
};

export { asyncVeryfication, asyncAuthorization };
