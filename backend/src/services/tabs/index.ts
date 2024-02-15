import { Request, Response } from 'express';
import ModelNames from '../../constant/modelNames';
import { Tabs } from 'src/models/types';
import { changeModelsHandler } from '../../../src/models/helpers';
import { createItemId, filterItemsById, findItemById } from '../helpers';
import { HttpStatus } from '../../constant/httpStatus';

const { TABS } = ModelNames;
const { SUCCES, BAD_REQUEST, NOT_FOUND } = HttpStatus;

const tabsServices = ({ data, lastUpdatedAt, lastUpdatedBy }: Tabs) => ({
  get: (_req: Request, res: Response) => {
    try {
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
  create: (req: Request, res: Response) => {
    const id = createItemId(data);
    const tab = req.body;
    const tabs = [...data, ...[{ id, ...tab }]];
    const model = { data: tabs, lastUpdatedAt, lastUpdatedBy };

    try {
      changeModelsHandler(model, TABS);
      res.status(200).json(SUCCES);
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
  edit: (req: Request, res: Response) => {
    const id = +req.params.id;
    const tab = req.body;
    const tabs = [...filterItemsById(id, data), ...[{ id, ...tab }]];
    const model = { data: tabs, lastUpdatedAt, lastUpdatedBy };
    const isFoundTab = findItemById(id, data);

    try {
      switch (true) {
        case isFoundTab:
          changeModelsHandler(model, TABS);
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
    const tabs = filterItemsById(id, data);
    const model = { data: tabs, lastUpdatedAt, lastUpdatedBy };
    const isFoundTab = findItemById(id, data);

    try {
      switch (true) {
        case isFoundTab:
          changeModelsHandler(model, TABS);
          return res.status(200).json(SUCCES);
        default:
          return res.status(404).json(NOT_FOUND);
      }
    } catch (error) {
      res.status(400).json(BAD_REQUEST);
    }
  },
});

export default tabsServices;
