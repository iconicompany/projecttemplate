export const isProduction = process.env.ILB_SYSID === 'PRODUCTION';
export const isDevel = process.env.ILB_SYSID === 'DEVEL';
export const isLocal = process.env.ILB_SYSID === 'LOCAL';

export const buildRequest = (req) => {
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
