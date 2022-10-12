import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import RoleUsecases from '../../../src/usecases/RoleUsecases.mjs';

export default createRouter()
  .get(handleRequest(RoleUsecases, 'list'))
  .post(handleRequest(RoleUsecases, 'create'))
  .handler();
