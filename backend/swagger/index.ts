import ModelNames from './../src/constant/modelNames';
import { name, version } from './../package.json';
import { usersSchemas, authApi } from './auth';
import { linksApi, linksSchemas } from './links';

const { LINKS, USERS } = ModelNames;

const swaggerDoc = {
  openapi: '3.0.1',
  info: {
    title: name,
    version,
    description: `API for controlling the ${name}`,
  },
  paths: {
    '/navigator/auth': authApi,
    '/navigator/links': linksApi,
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      [USERS]: usersSchemas,
      [LINKS]: linksSchemas,
    },
  },
};

export default swaggerDoc;
