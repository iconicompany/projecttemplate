import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import RoleUsecases from '../../../src/http/usecases/RoleUsecases.mjs';

export default createRouter()
  .get(handleRequest(RoleUsecases, 'read'))
  .put(handleRequest(RoleUsecases, 'update'))
  .delete(handleRequest(RoleUsecases, 'delete'))
  .handler();
