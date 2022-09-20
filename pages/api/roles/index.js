import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import RoleController from '../../../src/http/controllers/RoleController.mjs';

export default createRouter()
  .get(handleRequest(RoleController, 'list'))
  .post(handleRequest(RoleController, 'create'))
  .handler();
