export default class Repository {
  constructor({ prisma }) {
    this.prisma = prisma;
    this.setupTable();
    this.setupModel();
  }

  setupTable() {
    this.table = this.constructor.name.slice(0, -10);
  }

  setupModel() {
    const modelName = this.table.charAt(0).toLowerCase() + this.table.slice(1);
    this.model = this.prisma[modelName];
  }

  async findUnique(data) {
    return this.model.findUnique({ where: data });
  }

  async findById(id) {
    return this.model.findUnique({ where: { id } });
  }

  async findByUuid(uuid) {
    return this.model.findUnique({ where: { uuid } });
  }

  async create(data) {
    return this.model.create({ data });
  }

  async update(data) {
    return this.model.update({ where: this.getUniqueFilter(data), data });
  }

  async upsert(filter, data) {
    return this.model.upsert({ where: filter, update: data, create: data })
  }

  getUniqueFilter({ id, uid, uuid }) {
    if (id) {
      return { id };
    } else if (uid) {
      return { uid };
    } else {
      return { uuid };
    }
  }
}