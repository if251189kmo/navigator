import { Request, Response } from 'express';
import initLinkController from '../../controllers/links';

const getAsyncLinks = async (req: Request, res: Response) => {
  const { getLinks } = await initLinkController();
  return getLinks(req, res);
};

const createAsyncLinks = async (req: Request, res: Response) => {
  const { createLink } = await initLinkController();
  return createLink(req, res);
};

const editAsyncLinks = async (req: Request, res: Response) => {
  const { editLink } = await initLinkController();
  return editLink(req, res);
};

const deleteAsyncLinks = async (req: Request, res: Response) => {
  const { deleteLink } = await initLinkController();
  return deleteLink(req, res);
};

export { getAsyncLinks, createAsyncLinks, editAsyncLinks, deleteAsyncLinks };
