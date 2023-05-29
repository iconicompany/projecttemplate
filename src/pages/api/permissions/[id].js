import { createRouter } from 'next-connect';
import PermissionUsecases from '@/usecases/PermissionUsecases.mjs';
import { handleRequest } from '@/core/index.mjs';

export default createRouter()
  .get(handleRequest(PermissionUsecases, 'read'))
  .put(handleRequest(PermissionUsecases, 'update'))
  .delete(handleRequest(PermissionUsecases, 'delete'))
  .handler();
