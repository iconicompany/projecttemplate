import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import RoleController from '../../../src/http/controllers/RoleController.mjs';

export default createRouter()
  .get(handleRequest(RoleController, 'read'))
  .put(handleRequest(RoleController, 'update'))
  .delete(handleRequest(RoleController, 'delete'))
  .handler();