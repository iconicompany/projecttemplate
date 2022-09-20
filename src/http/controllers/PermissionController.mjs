import DictionaryController from '../../core/controllers/DictionaryController.mjs';

export default class PermissionController extends DictionaryController {
  /**
   * @param {PermissionRepository} permissionRepository
   */
  constructor({ permissionRepository}) {
    super();
    this.repository = permissionRepository;
  }
}
