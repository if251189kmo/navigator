import linksServices from '../../services/links';
import { readJson } from '../../models/helpers';
import ModelNames from '../../constant/modelNames';

const { LINKS } = ModelNames;

const initLinkController = async () => {
  const data = await readJson(LINKS);

  return {
    getLinks: linksServices(data).get,
    createLink: linksServices(data).create,
    editLink: linksServices(data).edit,
    deleteLink: linksServices(data).delete,
  };
};

export default initLinkController;
