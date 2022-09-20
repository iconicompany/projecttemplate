import Repository from '../core/Repository.mjs';
// import { Role } from '../database/models/index.mjs';

export default class RoleRepository extends Repository {
  constructor(scope) {
    super(scope);
    // this.model = Role;
  }
}
