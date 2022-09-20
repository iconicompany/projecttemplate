import { handleRequest } from '../../../src/helpers/core.mjs';
import { createRouter } from 'next-connect';
import AuthController from '../../../src/http/controllers/AuthController.mjs';

export default createRouter().post(handleRequest(AuthController, 'signUp')).handler();
