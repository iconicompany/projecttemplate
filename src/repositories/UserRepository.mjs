import Repository from '../core/Repository.mjs';

export default class UserRepository extends Repository {
  async getList(params) {
    return this.model.findAndCountAll({
      limit: params.limit,
      offset: params.offset
    });
  }

  async findByLogin(login) {
    return this.findUnique({ login })
  }

  async findById(id) {
    return this.model.findOne({
      where: { id },
      include: 'role'
    });
  }

  async create(user) {
    return this.model.create(user);
  }

  async update(user) {
    return (await this.model.upsert(user));
  }
}