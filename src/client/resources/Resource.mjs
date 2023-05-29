import Querable from '@/core/Querable.mjs';

export default class Resource extends Querable {
  path = '';

  constructor() {
    super();
    this.client.setConfig({
      baseUrl: process.env.API_PATH
    })
  }
}