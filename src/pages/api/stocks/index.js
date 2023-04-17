import { createRouter } from 'next-connect';
import { handleRequest } from '../../../core/index.mjs';
import StockUsecases from "../../../usecases/StockUsecases";

export default createRouter()
  .get(handleRequest(StockUsecases, 'index', 'access:stocks_read'))
  .post(handleRequest(StockUsecases, 'create', 'access:stocks_create'))
  .handler();
