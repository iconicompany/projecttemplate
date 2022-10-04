import Kernel from '../Kernel'
import JsonResponse from '../core/responses/JsonResponse.mjs';

export function handleRequest(controller, method, responseHandler = JsonResponse) {
  return async (req, res, next) => {
    const scope = await createScope(req, res, next);
    const instance = new controller(scope.cradle)
    const result = await instance[method](scope.cradle);
    await responseHandler.build(res, result);
  }
}

export function handlePage(usecase, method) {
  return async (req, res, next) => {
    const scope = await createScope(req, res, next);
    const instance = new usecase(scope.cradle)
    const result = await instance[method](scope.cradle);

    return { props: result }
  }
}

export async function createScope(req, res, next) {
  const kernel = new Kernel();

  return kernel.createApplication(req, res, next);
}