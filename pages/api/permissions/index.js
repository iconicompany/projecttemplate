import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import PermissionUsecases from '../../../src/usecases/PermissionUsecases.mjs';

export default createRouter()
  .get(handleRequest(PermissionUsecases, 'list'))
  .post(handleRequest(PermissionUsecases, 'create'))
  .handler();
