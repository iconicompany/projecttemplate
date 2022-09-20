import Schema from './Schema.mjs';

export default class RoleSchema extends Schema {
  static get() {
    return {
      type: 'object',
      properties: {
        title: { title: 'Название', type: 'string' },
        code: { title: 'Код', type: 'string' },
      },
      required: ['title', 'code'],
    }
  }
}