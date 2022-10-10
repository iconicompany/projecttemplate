import Repository from '../core/Repository.mjs';
import Prisma from '@prisma/client';

export default class UserRepository extends Repository {
  async getAllPaginated(params) {
    return super.getAllPaginated({ ...params, include: {
        role: true
      }
    });
  }

  async findByLogin(login) {
    const result = await this.model.findUnique({
      where: { login },
      include: {
        role: {
          include: {
            permissions: true
          }
        }
      }
    });

    return this.formatResult(result);  }

  async create(user) {
    if (!user.data) {
      user.data = Prisma.dbNull
    }

    if (user.roleId) {
      user.role = {
        connect: {
          id: user.roleId
        }
      }
      delete user.roleId;
    }

    return super.create(user);
  }

  async update(user) {
    if (!user.data) {
      user.data = Prisma.dbNull
    }

    return super.update(user)
  }

  async findById(id) {
    const result = await this.model.findUnique({
      where: { id },
      include: {
        role: {
          select: {
            code: true,
            title: true
          }
        }
      }
    });

    return this.formatResult(result);
  }
}
