import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { schema } from '../../schemas/links';
import commonValidation from './';

const { validRoutId } = commonValidation;

const validate = new Ajv().compile(schema);

const linkValid = (req: Request, res: Response, next: NextFunction) => {
  const link = req.body;
  const isValid = validate(link);

  if (!isValid) res.status(405).json(validate.errors.map(({ instancePath, message }) => ({ instancePath, message })));
  else return next();
};

const linksValidation = {
  createValid: [linkValid],
  editValid: [validRoutId, linkValid],
  deleteValid: [validRoutId],
};

export default linksValidation;
