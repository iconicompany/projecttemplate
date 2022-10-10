import { handleRequest } from '../../../src/helpers/core.mjs';
import { createRouter } from 'next-connect';
import AuthUsecases from '../../../src/http/usecases/AuthUsecases.mjs';

export default createRouter().post(handleRequest(AuthUsecases, 'signUp')).handler();
