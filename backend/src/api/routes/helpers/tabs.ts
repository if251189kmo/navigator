import { Request, Response } from 'express';
import initTabController from '../../controllers/tabs';

const getAsyncTabs = async (req: Request, res: Response) => {
  const { getTabs } = await initTabController();
  return getTabs(req, res);
};

const createAsyncTabs = async (req: Request, res: Response) => {
  const { createTab } = await initTabController();
  return createTab(req, res);
};

const editAsyncTabs = async (req: Request, res: Response) => {
  const { editTab } = await initTabController();
  return editTab(req, res);
};

const deleteAsyncTabs = async (req: Request, res: Response) => {
  const { deleteTab } = await initTabController();
  return deleteTab(req, res);
};

export { getAsyncTabs, createAsyncTabs, editAsyncTabs, deleteAsyncTabs };
