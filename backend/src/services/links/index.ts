import { Request, Response } from 'express';
import ModelNames from '../../constant/modelNames';
import { Links } from 'src/models/types';
import { changeModelsHandler } from '../../models/helpers';
import { createItemId, filterItemsById, findItemById } from '../helpers';
import { HttpStatus } from '../../constant/httpStatus';

const { LINKS } = ModelNames;
const { SUCCES, BAD_REQUEST, NOT_FOUND } = HttpStatus;

const linksServices = ({ data, lastUpdatedAt, lastUpdatedBy }: Links) => ({
  get: (_req: Request, res: Response) => {
    try {
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
  create: (req: Request, res: Response) => {
    const id = createItemId(data);
    const link = req.body;
    const links = [...data, ...[{ id, ...link }]];
    const model = { data: links, lastUpdatedAt, lastUpdatedBy };

    try {
      changeModelsHandler(model, LINKS);
      res.status(200).json(SUCCES);
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
  edit: (req: Request, res: Response) => {
    const id = +req.params.id;
    const link = req.body;
    const links = [...filterItemsById(id, data), ...[{ id, ...link }]];
    const model = { data: links, lastUpdatedAt, lastUpdatedBy };
    const isFoundLink = findItemById(id, data);

    try {
      switch (true) {
        case isFoundLink:
          changeModelsHandler(model, LINKS);
          return res.status(200).json(SUCCES);
        default:
          return res.status(404).json(NOT_FOUND);
      }
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
  delete: (req: Request, res: Response) => {
    const id = +req.params.id;
    const links = filterItemsById(id, data);
    const model = { data: links, lastUpdatedAt, lastUpdatedBy };
    const isFoundLink = findItemById(id, data);

    try {
      switch (true) {
        case isFoundLink:
          changeModelsHandler(model, LINKS);
          return res.status(200).json(SUCCES);
        default:
          return res.status(404).json(NOT_FOUND);
      }
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
});

export default linksServices;
