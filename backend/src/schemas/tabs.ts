const linksIds = {
  type: 'array',
  items: {
    type: 'number',
  },
};

const groups = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      linksIds,
    },
    required: ['id', 'name', 'linksIds'],
  },
};

const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    label: { type: 'string' },
    iconUrl: { type: 'string' },
    order: { type: 'number' },
    groups,
  },
  required: ['label', 'iconUrl', 'order', 'groups'],
};

export { schema };
