import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import PermissionController from '../../../src/http/controllers/PermissionController.mjs';

export default createRouter()
  .get(handleRequest(PermissionController, 'list'))
  .post(handleRequest(PermissionController, 'create'))
  .handler();
