import CrudController from './CrudController.mjs';

export default class DictionaryController extends CrudController {
  /**
   * @returns {Promise<*>}
   */
  async list() {
    return this.repository.list();
  }

  /**
   * @param {Request} request
   * @returns {Promise<*>}
   */
  async create({ request }) {
    return this.repository.create(request);
  }

  /**
   * @param {Request} request
   * @returns {Promise<*>}
   */
  async read({ request }) {
    return this.repository.read(request.id);
  }

  /**
   * @param {Request} request
   * @returns {Promise<*>}
   */
  async update({ request }) {
    return this.repository.update(request);
  }

  /**
   * @param {Request} request
   * @returns {Promise<*>}
   */
  async delete({ request }) {
    return this.repository.delete(request.id);
  }
}