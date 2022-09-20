export const isProduction = process.env.ILB_SYSID === 'PRODUCTION';
export const isDevel = process.env.ILB_SYSID === 'DEVEL';
export const isLocal = process.env.ILB_SYSID === 'LOCAL';
