import { createRouter } from 'next-connect';
import { handleRequest } from '../../../src/helpers/core.mjs';
import UserController from '../../../src/http/controllers/UserController.mjs';

export default createRouter()
  .get(handleRequest(UserController, 'read'))
  .put(handleRequest(UserController, 'update'))
  .delete(handleRequest(UserController, 'delete'))
  .handler();
