import {handleRequest} from "../../../core/index.mjs";
import StockUsecases from "../../../usecases/StockUsecases.mjs";
import {createRouter} from "next-connect";

export default createRouter()
  // .get(handleRequest(StockUsecases, 'read'))
  .put(handleRequest(StockUsecases, 'update', 'access:stocks_update'))
  .delete(handleRequest(StockUsecases, 'delete', 'access:stocks_delete'))
  .handler()