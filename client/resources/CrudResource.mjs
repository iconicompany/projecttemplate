import Resource from './Resource.mjs';
import Api from '../helpers/Api.js';

export default class CrudResource extends Resource {
  /**
   * @param data
   * @returns {Promise<[]>}
   */
  static async getList(data = {}) {
    return this.processRequest('get', `/${this.path}`, data)
  }

  /**
   * @param data
   * @return {Promise<*|undefined>}
   */
  static async store(data) {
    if (data.id) {
      return this.update(data.id, data);
    } else {
      return this.create(data);
    }
  };

  /**
   * @param {object} data
   * @returns {Promise<object>}
   */
  static async create(data) {
    return this.processRequest('post', `/${this.path}`, data)
  };

  /**
   * @param {int} id
   * @returns {Promise<object>}
   */
  static async read(id) {
    return this.processRequest('get', `/${this.path}/${id}`)
  };

  /**
   * @param {int} id
   * @param {object} data
   * @returns {Promise<null>}
   */
  static async update(id, data) {
    return this.processRequest('put', `/${this.path}/${id}`, data)
  };

  /**
   * @param {int} id
   * @returns {Promise<null>}
   */
  static async delete(id) {
    return this.processRequest('delete', `/${this.path}/${id}`)
  }
}