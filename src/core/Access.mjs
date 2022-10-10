import ForbiddenException from './exceptions/ForbiddenException.mjs';
import UnauthorizedException from './exceptions/UnauthorizedException.mjs';

export default class Access {
  constructor({ user }) {
    this.user = user;
  }

  /**
   * Проверка прав доступа пользователя
   *
   * @param {string} permission
   * @returns {Promise<*>}
   */
  async check(permission) {
    if (permission === 'auth') { // авторизован
      if (!this.user) {
        throw new UnauthorizedException();
      }

      return;
    }

    const permissions = this.user.role.permissions.map(permission => permission.code);

    if (!permissions.includes(permission)) {
      throw new ForbiddenException();
    }
  }
}
