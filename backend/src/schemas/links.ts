const schema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    code: { type: 'number' },
    label: { type: 'string' },
    url: { type: 'string' },
    new: { type: 'boolean' },
    order: { type: 'number' },
  },
  required: ['label', 'url', 'new', 'order'],
};

export { schema };
