import { createRouter } from 'next-connect';
import UserUsecases from '@/usecases/UserUsecases.mjs';
import { handleRequest } from '@/core/index.mjs';

export default createRouter()
  .get(handleRequest(UserUsecases, 'list'))
  .post(handleRequest(UserUsecases, 'create'))
  .handler();
