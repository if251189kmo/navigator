import { HttpStatus } from './../src/constant/httpStatus';
import ModelNames from './../src/constant/modelNames';

const { SUCCES, BAD_REQUEST } = HttpStatus;
const { LINKS } = ModelNames;

const linksSchemas = {
  type: 'object',
  properties: {
    code: {
      type: 'number',
      description: 'List code',
    },
    label: {
      type: 'string',
      description: 'List label',
    },
    url: {
      type: 'string',
      description: 'List url',
    },
    new: {
      type: 'boolean',
      description: 'List new',
    },
    order: {
      type: 'number',
      description: 'List order',
    },
  },
};

const linksApi = {
  get: {
    tags: [LINKS],
    summary: 'Get all links',
    responses: {
      '200': {
        description: SUCCES,
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: { $ref: `#/components/schemas/${LINKS}` },
          },
          required: ['label', 'url', 'new', 'order'],
        },
      },
      '400': {
        description: BAD_REQUEST,
      },
    },
  },
  post: {
    tags: [LINKS],
    summary: 'Create new link',
    requestBody: {
      content: {
        'application/json': {
          schema: { $ref: `#/components/schemas/${LINKS}` },
        },
      },
    },
    responses: {
      '200': {
        description: SUCCES,
      },
      '400': {
        description: BAD_REQUEST,
      },
    },
    security: [{ BearerAuth: [] }],
  },
};

export { linksSchemas, linksApi };
