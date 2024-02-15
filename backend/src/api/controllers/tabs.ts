import tabsServices from '../../services/tabs';
import { readJson } from '../../models/helpers';
import ModelNames from '../../constant/modelNames';

const { TABS } = ModelNames;

const initTabController = async () => {
  const data = await readJson(TABS);

  return {
    getTabs: tabsServices(data).get,
    createTab: tabsServices(data).create,
    editTab: tabsServices(data).edit,
    deleteTab: tabsServices(data).delete,
  };
};

export default initTabController;
