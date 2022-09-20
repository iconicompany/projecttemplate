import Response from './Response.mjs';

export default class JsonResponse extends Response {
  static async build(res, object) {
    res.json(object);
  }
}