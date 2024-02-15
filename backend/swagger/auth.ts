import { HttpStatus } from './../src/constant/httpStatus';
import ModelNames from './../src/constant/modelNames';

const { UNAUTHORIZED, SUCCES } = HttpStatus;
const { USERS } = ModelNames;

const usersSchemas = {
  type: 'object',
  properties: {
    login: {
      type: 'string',
      description: 'User login.',
    },
    password: {
      type: 'string',
      description: 'User password.',
    },
  },
  required: ['login', 'password'],
};

const authApi = {
  post: {
    tags: ['Auth'],
    summary: 'Authenticate user',
    requestBody: {
      content: {
        'application/json': {
          schema: { $ref: `#/components/schemas/${USERS}` },
        },
      },
    },
    responses: {
      '200': {
        description: SUCCES,
        schema: {
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
      },
      '401': {
        description: UNAUTHORIZED,
      },
    },
  },
};

export { usersSchemas, authApi };
