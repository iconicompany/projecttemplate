import { createRouter } from 'next-connect';
import AuthUsecases from '../../../usecases/AuthUsecases.mjs';
import { handleRequest } from '../../../core/index.mjs';

export default createRouter().post(handleRequest(AuthUsecases, 'signUp')).handler();
