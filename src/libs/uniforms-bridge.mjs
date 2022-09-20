import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import ajv from './ajv.mjs';

const createValidator = schema => {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
};

const createSchemaBridge = schema => {
  const schemaValidator = createValidator(schema);

  return new JSONSchemaBridge(schema, schemaValidator);
}

export default createSchemaBridge;