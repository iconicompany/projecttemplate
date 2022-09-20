import DictionaryController from '../../core/controllers/DictionaryController.mjs';

export default class RoleController extends DictionaryController {
  /**
   * @param {RoleRepository} roleRepository
   */
  constructor({ roleRepository }) {
    super();
    this.repository = roleRepository;
  }
}