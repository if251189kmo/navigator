import { ModelItemId, ModelItem } from 'src/models/types';

const filterItemsById = (id: ModelItemId, items: ModelItem[]) => items.filter((item: ModelItem) => item.id !== id);

const findItemById = (id: ModelItemId, items: ModelItem[]) => !!items.find((el) => el.id === id);

const createItemId = (items: ModelItem[]) =>
  items.length !== 0 ? Math.max(...items.map((item: ModelItem) => item.id)) + 1 : 0;

export { filterItemsById, findItemById, createItemId };
