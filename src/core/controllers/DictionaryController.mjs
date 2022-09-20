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
   * @returns {Promise<User>}
   */
  async create({ request }) {
    return this.repository.create(request.all());
  }

  /**
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async read({ request }) {
    return this.repository.read(request.get('id'));
  }

  /**
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async update({ request }) {
    return this.repository.update(request.all());
  }

  /**
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async delete({ request }) {
    return this.repository.delete(request.get('id'));
  }
}