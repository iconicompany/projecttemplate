import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import PermissionUsecases from '../../../src/http/usecases/PermissionUsecases.mjs';

export default createRouter()
  .get(handleRequest(PermissionUsecases, 'read'))
  .put(handleRequest(PermissionUsecases, 'update'))
  .delete(handleRequest(PermissionUsecases, 'delete'))
  .handler();
