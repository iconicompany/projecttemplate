import { createContainer, asValue, asClass } from 'awilix';
import Response from './core/responses/Response.mjs';
import Request from './core/Request.mjs';
import path from 'path';
import glob from 'glob';
import prisma from './libs/prisma.mjs';

export default class Kernel {
  constructor() {
    this.container = createContainer();
  }

  async createApplication(req, res, next) {
    await this.registerClasses();
    await this.registerValues(req, res, next);
    await this.initStatic(req, res);

    return this.container;
  }

  async registerValues(req, res, next) {
    this.container.register({
      next: asValue(next),
      req: asValue(req),
      request: asClass(Request),
      prisma: asValue(prisma)
    });
  }

  async registerClasses() {
    for (const file of glob.sync('src/@(services|repositories|requests|adapters)/*.mjs')) {
      const pathFile = path.parse(file);
      const name = pathFile.name;
      const folder = pathFile.dir.replace('src/', '');
      const instanceName = name[0].toLowerCase() + name.slice(1);
      const module = await import((`./${folder}/${name}.mjs`));
      this.container.register({
        [instanceName]: asClass(module.default)
      });
    }
  }

  async initStatic(req, res) {
    Response.response = res;
  }
}
