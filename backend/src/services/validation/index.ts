import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { idSchema } from '../../schemas/index';

const commonValidation = {
  validRoutId: (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;
    const validate = new Ajv().compile(idSchema);
    const isValid = validate(id);

    if (!isValid) res.status(404).json('not found');
    else return next();
  },
};

export default commonValidation;
