import Resource from './Resource.mjs';
import Api from '../helpers/Api.js';

export default class CrudResource extends Resource {
  /**
   * @param data
   * @returns {Promise<[]>}
   */
  static async getList(data = {}) {
    const res = await Api.get(`/${this.path}`, data);
    return this.handleResponse(res);
  }

  /**
   * @param {object} data
   * @returns {Promise<object>}
   */
  static async create(data) {
    const res = await Api.post(`/${this.path}`, data);
    return this.handleResponse(res);
  };

  /**
   * @param {int} id
   * @returns {Promise<object>}
   */
  static async read(id) {
    const res = await Api.get(`/${this.path}/${id}`);
    return this.handleResponse(res);
  };

  /**
   * @param {int} id
   * @param {object} data
   * @returns {Promise<null>}
   */
  static async update(id, data) {
    const res = await Api.put(`/${this.path}/${id}`, data);
    return this.handleResponse(res);
  };

  /**
   * @param {int} id
   * @returns {Promise<null>}
   */
  static async delete(id) {
    const res = await Api.delete(`/${this.path}/${id}`);
    return this.handleResponse(res);
  }

  /**
   * @param res
   * @returns {*|null}
   */
  static handleResponse(res) {
    return res.ok ? res.body : null;
  }
}