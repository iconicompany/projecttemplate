import DictionaryController from '../../core/controllers/DictionaryController.mjs';

export default class PermissionUsecases extends DictionaryController {
  /**
   * @param {PermissionRepository} permissionRepository
   */
  constructor({ permissionRepository}) {
    super();
    this.repository = permissionRepository;
  }
}
