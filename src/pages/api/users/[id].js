import { createRouter } from 'next-connect';
import UserUsecases from '../../../usecases/UserUsecases.mjs';
import { handleRequest } from '../../../core/index.mjs';

export default createRouter()
  .get(handleRequest(UserUsecases, 'read'))
  .put(handleRequest(UserUsecases, 'update'))
  .delete(handleRequest(UserUsecases, 'delete'))
  .handler();
