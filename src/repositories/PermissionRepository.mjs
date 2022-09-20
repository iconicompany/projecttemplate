import Repository from '../core/Repository.mjs';
// import { Permission } from '../database/models/index.mjs';

export default class PermissionRepository extends Repository {
  constructor(scope) {
    super(scope);
    // this.model = Permission;
  }
}
