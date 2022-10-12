import Kernel from '../Kernel'
import JsonResponse from '../core/responses/JsonResponse.mjs';
import PageResponse from '../core/responses/PageResponse.mjs';

export function handleRequest(controller, method, responseHandler = JsonResponse) {
  return async (req, res, next) => {
    try {
      const scope = await createScope(req, res, next);
      const instance = new controller(scope.cradle)
      const result = await instance[method](scope.cradle);
      await responseHandler.build(result, res);
    } catch (exception) {
      console.log(exception);
      await responseHandler.exception(exception, res);
    }
  }
}

export function handlePage(usecase, method, permission = 'auth') {
  return async (req, res, next) => {
    try {
      const scope = await createScope(req, res, next);
      permission && await scope.cradle.access.check(permission);
      const instance = new usecase(scope.cradle)
      const result = await instance[method](scope.cradle);

      return PageResponse.build(result);
    } catch (exception) {
      console.log(exception);
      return PageResponse.exception(exception);
    }
  }
}

export async function createScope(req, res, next) {
  const kernel = new Kernel();

  return kernel.createApplication(req, res, next);
}