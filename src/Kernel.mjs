import { createContainer, asValue, asClass } from 'awilix';
import path from 'path';
import glob from 'glob';
import prisma from './libs/prisma.mjs';
import { buildRequest } from './helpers/utils.mjs';

export default class Kernel {
  constructor() {
    this.container = createContainer();
  }

  async createApplication(req, res, next) {
    await this.registerClasses();
    await this.registerVaryingClasses();
    await this.registerLibClasses();
    await this.registerValues(req, res, next);
    await this.initStatic(req, res);

    return this.container;
  }

  async registerValues(req, res, next) {
    this.container.register({
      // socket: asValue(res?.socket?.server?.io),
      next: asValue(next),
      req: asValue(req),
      request: asValue(buildRequest(req)),
      prisma: asValue(prisma)
    });
  }

  async registerVaryingClasses() {
    this.container.register({
      // recognizeGate: asClass(isProduction ? RecognizeGate : MockRecognizeGate)
    })
  }

  async registerLibClasses() {
    this.container.register({
      // autoChecks: asClass(AutoChecks)
    })
  }

  async registerClasses() {
    for (const file of glob.sync('src/@(services|repositories|requests|adapters)/*.mjs')) {
      const pathFile = path.parse(file);
      const name = pathFile.name;
      const folder = pathFile.dir.replace('src/', '');
      const instanceName = name[0].toLowerCase() + name.slice(1);
      const module = await import(`./${folder}/${name}.mjs`);
      this.container.register({
        [instanceName]: asClass(module.default)
      });
    }
  }

  async initStatic(req, res) {

  }
}
