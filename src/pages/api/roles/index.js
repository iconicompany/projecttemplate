import { createRouter } from 'next-connect';
import RoleUsecases from '../../../usecases/RoleUsecases.mjs';
import { handleRequest } from '../../../core/index.mjs';

export default createRouter()
  .get(handleRequest(RoleUsecases, 'list'))
  .post(handleRequest(RoleUsecases, 'create'))
  .handler();
