import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import UserUsecases from '../../../src/usecases/UserUsecases.mjs';

export default createRouter()
  .get(handleRequest(UserUsecases, 'read'))
  .put(handleRequest(UserUsecases, 'update'))
  .delete(handleRequest(UserUsecases, 'delete'))
  .handler();
