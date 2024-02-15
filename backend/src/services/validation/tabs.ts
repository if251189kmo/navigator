import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { schema } from '../../schemas/tabs';
import commonValidation from './';

const { validRoutId } = commonValidation;

const tabValid = (req: Request, res: Response, next: NextFunction) => {
  const tab = req.body;
  const validate = new Ajv().compile(schema);
  const isValid = validate(tab);

  if (!isValid) res.status(405).json(validate.errors.map(({ instancePath, message }) => ({ instancePath, message })));
  else return next();
};

const tabsValidation = {
  createValid: [tabValid],
  editValid: [validRoutId, tabValid],
  deleteValid: [validRoutId],
};

export default tabsValidation;
