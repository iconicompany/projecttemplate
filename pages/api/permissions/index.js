import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import PermissionController from '../../../src/http/usecases/PermissionUsecases.mjs';

export default createRouter()
  .get(handleRequest(PermissionController, 'list'))
  .post(handleRequest(PermissionController, 'create'))
  .handler();
