import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import UserUsecases from '../../../src/usecases/UserUsecases.mjs';

export default createRouter()
  .get(handleRequest(UserUsecases, 'list'))
  .post(handleRequest(UserUsecases, 'create'))
  .handler();
