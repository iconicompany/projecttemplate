import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import PermissionController from '../../../src/http/controllers/PermissionController.mjs';

export default createRouter()
  .get(handleRequest(PermissionController, 'read'))
  .put(handleRequest(PermissionController, 'update'))
  .delete(handleRequest(PermissionController, 'delete'))
  .handler();
