import ajv from '../libs/ajv.mjs';

export default class Request {
  constructor({ req }) {
    this.request = this.buildRequest(req);
  }

  get(key) {
    return this.request[key];
  }

  async validate() {
    this.validateBySchema();
  }

  buildRequest(req) {
    let request = {};

    if (req.body) {
      request = { ...(typeof req.body === 'string' ? JSON.parse(req.body) : req.body) };
    }

    if (req.params) {
      request = { ...request, ...req.params };
    }

    if (req.query) {
      request = { ...request, ...req.query };
    }

    return request;
  }

  all() {
    return this.request;
  }

  validateBySchema() {
    const schema = this.schema();

    if (!schema) return;

    const validate = ajv.compile(schema);

    if (!validate(this.request)) {
      throw new Error(JSON.stringify(validate.errors));
    }
  }

  /**
   *
   * @returns {null|object}
   */
  schema() {
    return null;
  }
}