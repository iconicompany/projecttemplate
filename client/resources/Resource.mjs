import Api from '../helpers/Api.js';

export default class Resource {
  path = '';

  static async processRequest(method, url, data = {}) {
    const res = await Api[method](url, data);

    if (res.ok) {
      try {
        return this.handleResponse(res);
      } catch (err) {
        throw Error(err.message);
      }
    } else {
      throw Error(res.body.error || res.body);
    }
  }

  static handleResponse(res) {
    return res.ok ? res.body : null;
  }
}