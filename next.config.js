/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'uniforms-bridge-json-schema',
  'uniforms',
  'uniforms-antd',
  'ajv',
  'ajv-i18n'
]);

const basePath = '/projecttemplate';

module.exports = withPlugins([withTM], {
  basePath,
  assetPrefix: basePath,
  env: {
    API_PATH: basePath + '/api'
  }
});
