import Controller from '../../core/controllers/Controller.mjs';

export default class UserController extends Controller {
  /**
   * @param {UserRepository} userRepository
   * @param {UserAdapter} userAdapter
   * @param {Request} request
   * @returns {Promise<void>}
   */
  async list({ userRepository, userAdapter, request }) {
    const data = await userRepository.getList(request.all());

    return userAdapter.forList(data, request);
  }

  /**
   * @param {UserRepository} userRepository
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async create({ userRepository, request }) {
    return userRepository.create(request.all());
  }

  /**
   * @param {UserRepository} userRepository
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async read({ userRepository, request }) {
    return userRepository.findById(request.get('id'));
  }

  /**
   * @param {UserRepository} userRepository
   * @param {Request} request
   * @returns {Promise<User>}
   */
  async update({ userRepository, request}) {
    await userRepository.update(request.all());

    return userRepository.findById(request.get('id'));
  }


  async delete() {
    // todo
  }
}